import { useState } from 'react';
import { useAppSelector } from '../../../../hooks/hooks';
import { QuestType, LEVELS } from '../../../../const';
import { Quest } from '../../../../types/main-types';
import { ReactComponent as IconAllQuests } from '../../../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../../../assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';

const QuestsCatalog = () => {
  const [activeType, setActiveType] = useState(QuestType.All)

  const{quests} = useAppSelector(({QUESTS}) => QUESTS);

  let questsInList = quests;

  if(activeType !== QuestType.All) {
    questsInList = quests.slice().filter((item: Quest) => item.type === activeType)
  }

  const handleClick = (item: QuestType) => {
    setActiveType(item)
  }

  return (<>
    <S.Tabs>
      <S.TabItem>
        <S.TabBtn
          isActive={QuestType.All === activeType}
          onClick={() => handleClick(QuestType.All)}
        >
          <IconAllQuests />
          <S.TabTitle>Все квесты</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn
          isActive={QuestType.Adventures === activeType}
          onClick={() => handleClick(QuestType.Adventures)}
        >
          <IconAdventures />
          <S.TabTitle>Приключения</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn
          isActive={QuestType.Horror === activeType}
          onClick={() => handleClick(QuestType.Horror)}
        >
          <IconHorrors />
          <S.TabTitle>Ужасы</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn
          isActive={QuestType.Mystic === activeType}
          onClick={() => handleClick(QuestType.Mystic)}
        >
          <IconMystic />
          <S.TabTitle>Мистика</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn
          isActive={QuestType.Detective === activeType}
          onClick={() => handleClick(QuestType.Detective)}
        >
          <IconDetective />
          <S.TabTitle>Детектив</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn
          isActive={QuestType.SciFi === activeType}
          onClick={() => handleClick(QuestType.SciFi)}
        >
          <IconScifi />
          <S.TabTitle>Sci-fi</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>
    </S.Tabs>

    <S.QuestsList>
    {
      questsInList.map((item: Quest) => (
        <S.QuestItem key={item.id}>
        <S.QuestItemLink to={`/detailed-quest/${item.id}`}>
          <S.Quest>
            <S.QuestImage
              src={item.previewImg}
              width="344"
              height="232"
              alt={item.title}
            />

            <S.QuestContent>
              <S.QuestTitle>{item.title}</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  {item.peopleCount[0]}–{item.peopleCount[1]} чел
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  {LEVELS.map(function (level): string {
                      if (item.level === level.key) { return level.value; }
                      return '';
                    })}
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>
      ))
    }
    </S.QuestsList>
  </>
  );
};

export default QuestsCatalog;
