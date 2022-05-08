import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { MainLayout } from '../../components/common/common';
import { BookingModal } from './components/components';
import { store } from '../../store/store';
import { fetchQuest } from '../../store/api-actions';
import Preloader from '../preloader/preloader';
import { QUEST_TYPE_NAMES, LEVELS } from '../../const';
import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';



function DetailedQuest (): JSX.Element {
  const params = useParams();

  useEffect(() => {
    store.dispatch(fetchQuest(params.id as string));
  }, [params.id]);

  const {quest, isDataLoaded} = useAppSelector(({QUEST}) => QUEST);

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const type = QUEST_TYPE_NAMES.map(function (item): string {
      if (quest.type === item.key) {
        return item.value;
      };

      return '';
    }
  )

  const level = LEVELS.map(function (item): string {
      if (quest.level === item.key) {
        return item.value;
      };

      return '';
    }
  )

  let peopleMin = 0
  let peopleMax = 0

  if(quest.peopleCount !== undefined){
  peopleMin = quest.peopleCount[0];
  peopleMax = quest.peopleCount[1];
}

  if(!isDataLoaded) {
   return (
     <Preloader />
   )
  }

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`http://localhost:3000/${quest.coverImg}`}
          alt={quest.title}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{quest.title}</S.PageTitle>
            <S.PageSubtitle>{type}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{quest.duration} мин.</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${peopleMin} — ${peopleMax} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{level}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {quest.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}  data-testid="booking-btn">
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onBookingModalClose={(item) => setIsBookingModalOpened(item)} />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
