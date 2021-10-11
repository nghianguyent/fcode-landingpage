import React, { useEffect } from 'react';

import AOS from 'aos';

import Pic7 from '../../assets/img/activities/background.svg';
import Pic1 from '../../assets/img/activities/pic1.png';
import Pic2 from '../../assets/img/activities/pic2.png';
import Pic3 from '../../assets/img/activities/pic3.png';
import Pic4 from '../../assets/img/activities/pic4.png';
import Pic5 from '../../assets/img/activities/pic5.png';
import Pic6 from '../../assets/img/activities/pic6.png';
import Pic8 from '../../assets/img/activities/pic8.png';
import Pic9 from '../../assets/img/activities/pic9.png';
import Pic10 from '../../assets/img/activities/pic10.png';
// import NavBar from '../../component/navbar';
// import Footer from '../../component/footer';
import {
    SectionWrapper,
    TopContainer,
    MidContainer,
    BottomContainer,
    PageTitle,
    PageRow,
    TitleInfo,
    TitleHead,
    TitleSpan,
    Detail,
    RegisButton,
    CirclesContainer,
    CircleWrap,
    EllipseImg1,
    EllipseImg2,
    EllipseImg3,
    BigCircle,
    SmallCircle,
    TrainC,
    TrainCImg1,
    TrainCInfo,
    TrainCText,
    TrainCHead,
    TrainCDetail,
    TrainCBotPic,
    TrainCImg2,
    TrainCImg3,
    TBImg,
    TBInfo,
    TBHead,
    TBDetail,
    WorkShopSection,
    WorkShopInfo,
    WorkShopHead,
    WorkShopDetail,
    WorkShopImgWrap,
    WorkShopImg1,
    WorkShopImg2,
    WorkShopImg3,
    MoreThings,
} from './style';

import 'aos/dist/aos.css';

const Activities = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);
    return (
        <SectionWrapper>
            {/* <NavBar /> */}
            <TopContainer>
                <PageTitle>
                    <PageRow>
                        <TitleInfo>
                            <TitleHead data-aos="fade-up">
                                MỘT SỐ <br /> HOẠT ĐỘNG CỦA CLB
                                <br />
                                <TitleSpan>FCODE</TitleSpan>
                            </TitleHead>
                            <Detail data-aos="fade-up">
                                Đến với FCode các bạn sẽ được tham gia rất nhiều hoạt động bổ ích,
                                cũng như trau dồi thêm được nhiều kinh nghiệp quý giá
                            </Detail>
                            <RegisButton data-aos="fade-up">ĐĂNG KÍ</RegisButton>
                        </TitleInfo>
                        <CirclesContainer data-aos="fade-left">
                            <CircleWrap>
                                <BigCircle></BigCircle>
                                <EllipseImg1 src={Pic1} draggable="false"></EllipseImg1>
                                <EllipseImg2 src={Pic2} draggable="false"></EllipseImg2>
                                <SmallCircle></SmallCircle>
                                <EllipseImg3 src={Pic3} draggable="false"></EllipseImg3>
                            </CircleWrap>
                        </CirclesContainer>
                    </PageRow>
                </PageTitle>
                <TrainC>
                    <TrainCImg1
                        src={Pic4}
                        draggable="false"
                        data-aos="fade-right"
                        data-aos-anchor-placement="bottom-bottom"
                    ></TrainCImg1>
                    <TrainCInfo>
                        <TrainCText data-aos="fade-down" data-aos-anchor-placement="bottom-bottom">
                            <TrainCHead>Train-C</TrainCHead>
                            <TrainCDetail>
                                Hoạt động giúp các thành viên trau dồi thêm kĩ năng về lập trình C
                                và cùng team tạo nên nhiều project thực tế.
                            </TrainCDetail>
                        </TrainCText>
                        <TrainCBotPic data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <TrainCImg2 src={Pic5} draggable="false"></TrainCImg2>
                            <TrainCImg3 src={Pic6} draggable="false"></TrainCImg3>
                        </TrainCBotPic>
                    </TrainCInfo>
                </TrainC>
            </TopContainer>
            <MidContainer data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                <TBInfo>
                    <TBHead>Team building</TBHead>
                    <TBDetail>
                        CLB hàng năm sẽ tổ chức thường buổi đi chơi dã ngoại giúp các thành viên gắn
                        kết với nhau hơn
                    </TBDetail>
                </TBInfo>
                <TBImg src={Pic7}></TBImg>
            </MidContainer>
            <BottomContainer>
                <WorkShopSection>
                    <WorkShopInfo data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
                        <WorkShopHead>Workshop</WorkShopHead>
                        <WorkShopDetail>
                            Nơi đây, mọi thành viên chia sẻ và tiếp thu những kinh nghiệm hiểu biết
                            về các lĩnh vực trong ngành lập trình.
                        </WorkShopDetail>
                    </WorkShopInfo>
                    <WorkShopImgWrap>
                        <WorkShopImg1
                            src={Pic8}
                            draggable="false"
                            data-aos="zoom-in"
                        ></WorkShopImg1>
                        <WorkShopImg2
                            src={Pic9}
                            draggable="false"
                            data-aos="zoom-in"
                            data-aos-delay="150"
                        ></WorkShopImg2>
                        <WorkShopImg3
                            src={Pic10}
                            draggable="false"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        ></WorkShopImg3>
                    </WorkShopImgWrap>
                    <MoreThings>
                        Và còn rất nhiều hoạt động bổ ích đang chờ các bạn tham gia...
                    </MoreThings>
                </WorkShopSection>
            </BottomContainer>
            {/* <Footer /> */}
        </SectionWrapper>
    );
};

export default Activities;
