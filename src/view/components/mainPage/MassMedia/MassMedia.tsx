import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import { Section, Video, Post, ParallaxCache } from 'view/common';

import { colors } from 'assets/variables/colors';

import * as S from './styled';

export const MassMedia: React.FC = () => {
  return (
    <Section
      header="СМИ о нас"
      variant={colors.yellow}
      headerVariant={colors.primary}
      contentVariant={colors.primary}
      id="massmedia"
    >
      <S.Wrapper>
        <Parallax y={[5, 0]}>
          <ParallaxCache />
          <S.Line>
            <S.VideoWrapper>
              <Video src="https://www.youtube.com/embed/FU5RKh0PFP4" headline="Это только начало!" />
            </S.VideoWrapper>
            <Post
              headline="Школьников Ноябрьска научат основам журналистики"
              link="https://noyabrsk24.ru/novosti/2020/09/29/shkol-nikov-noiabr-ska-nauchat-osnovam-zhurnalistiki/"
            >
              Школьников Ноябрьска научат основам журналистики. Участников проекта «Это только начало», автором которого
              является Марина Давлетшина, научат брать интервью и писать тексты. Юным «акулам пера» Ямала и Югры
              расскажут все про профессию журналиста. Не исключено, что кто-то из слушателей курса в последующем выберет
              работу на радио, в газете, на сайте или телевидении. <br /> <br /> На курс планируют набрать не меньше
              полусотни школьников. Занятия сделают бесплатными, они начнутся уже в ноябре этого года под руководством
              журналистов из разных городов.
            </Post>
          </S.Line>
          <S.Line>
            <Post
              headline="Представители ГОШ «САМ» приняли участие в Форуме добровольцев"
              link="http://www.upo-fco.ru/what/emblems/item/6688-predstaviteli-gosh-sam-prinyali-uchastie-v-forume-dobrovoltsev.html"
            >
              5 де­каб­ря 2020 го­да обу­ча­ющиеся во­лон­терс­ких твор­ческих объеди­нений «Го­род доб­рых сер­дец» и
              «Ли­дер» го­родс­кой ор­га­низа­ции школь­ни­ков «Со­юз ак­тивной мо­лоде­жи» СДО «Я-МАЛ» при­няли
              учас­тие в V меж­му­ници­паль­ном мо­лодеж­ном фо­руме «Тер­ри­тория Се­вера». <br /> <br /> Дав­летшин
              Ар­тем, Конд­рац­кая Ан­ге­лина, По­горе­лова Ели­заве­та, Шо­рохов Вла­дис­лав, Му­сыно­ва Ли­лия,
              Ки­шиневс­кая Дарья, Ла­ри­онов Ге­ор­гий и Ко­пача­ну Ма­рия от­ме­тили, что прог­рамма фо­рума бы­ла
              на­сыщен­ной и раз­но­об­разной. Участ­ни­ки за­ряди­лись по­ложи­тель­ны­ми эмо­ци­ями и по­лучи­ли
              мас­су но­вых зна­ний.
            </Post>
            <S.VideoWrapper>
              <Video src="https://www.youtube.com/embed/FU5RKh0PFP4" headline="Это только начало!" />
            </S.VideoWrapper>
          </S.Line>
        </Parallax>
      </S.Wrapper>
    </Section>
  );
};
