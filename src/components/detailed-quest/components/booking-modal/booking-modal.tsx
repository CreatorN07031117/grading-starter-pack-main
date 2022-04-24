import { useRef, FormEvent} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import { ReactComponent as IconClose } from '../../../../assets/img/icon-close.svg';
import { postOrder } from '../../../../store/api-actions';
import { useAppDispatch } from '../../../../hooks/hooks';
import { Order } from '../../../../types/main-types';
import * as S from './booking-modal.styled';

type BookingModalProps = {
  onBookingModalClose: (item: boolean) => void;
}

function BookingModal ({onBookingModalClose}:BookingModalProps): JSX.Element {

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const nameRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const peopleRef = useRef<HTMLInputElement | null>(null);
  const legalRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (orderData: Order) => {
    dispatch(postOrder(orderData));
  };

  const notifySucces =  ( )  =>  toast ('Ваша заявка принята. Наш менеджер свяжется с вами в течение часа');
  const notifyFail =  ( )  =>  toast ('Номер телефона должен быть 10 символов');

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(phoneRef.current?.value.length !== undefined && phoneRef.current?.value.length === 10){
      onSubmit ({
        name: nameRef.current?.value as string,
        phone: phoneRef.current?.value as string,
        peopleCount: Number(peopleRef.current?.value),
        isLegal: true,
      });
      notifySucces();
      return onBookingModalClose(false);
    }

    return notifyFail();
    };

  return (
  <S.BlockLayer>
    <S.Modal>
      <S.ModalCloseBtn
        onClick={() => onBookingModalClose(false)}
      >
        <IconClose width="16" height="16" />
        <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <S.BookingForm
        id="booking-form"
        action=""
        onSubmit={handleFormSubmit}
      >
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
          <S.BookingInput
            ref={nameRef}
            type="text"
            id="booking-name"
            name="booking-name"
            placeholder="Имя"
            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон
          </S.BookingLabel>
          <S.BookingInput
            ref={phoneRef}
            type="tel"
            id="booking-phone"
            name="booking-phone"
            placeholder="Телефон"
            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-people">
            Количество участников
          </S.BookingLabel>
          <S.BookingInput
            ref={peopleRef}
            type="number"
            id="booking-people"
            name="booking-people"
            placeholder="Количество участников"
            required
          />
        </S.BookingField>
        <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput
            ref={legalRef}
            type="checkbox"
            id="booking-legal"
            name="booking-legal"
            required
          />
          <S.BookingCheckboxLabel
            className="checkbox-label"
            htmlFor="booking-legal"
          >
            <S.BookingCheckboxText>
              Я согласен с{' '}
              <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
              </S.BookingLegalLink>
            </S.BookingCheckboxText>
          </S.BookingCheckboxLabel>
        </S.BookingCheckboxWrapper>
      </S.BookingForm>
    </S.Modal>
  </S.BlockLayer>
);}

export default BookingModal;
