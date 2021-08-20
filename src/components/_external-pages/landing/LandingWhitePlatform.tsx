// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography, useMediaQuery, Stack } from '@material-ui/core';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { MHidden } from 'components/@material-extend';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/static/icons/ic_customer.svg',
    title: (
      <>
        Reso <br /> Direct-to-Consumer
      </>
    ),
    description:
      'Allow your brand to offer your customers a personalised buying experience. Go D2C and add a new distribution channel for your brand.'
  },
  {
    icon: '/static/icons/ic_store.svg',
    title: (
      <>
        Reso <br /> Hyperlocal Marketplace
      </>
    ),
    description:
      'Leverage your business with a hyperlocal marketplace platform and focus on your target audience, ensuring on-time delivery.'
  },
  {
    icon: '/static/icons/ic_headless.svg',
    title: (
      <>
        Reso <br /> Headless Commerce
      </>
    ),
    description:
      'Scale your business with an event-driven platform. Build your own front-end and enhance your business without worrying about the infrastructure.'
  }
];

const shadowIcon = (color: string) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

// ----------------------------------------------------------------------

type Feature = {
  icon: string;
  title: string;
  description: string;
  caption: string;
};

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const { icon, title, description, caption } = feature;

  return (
    <Card
      sx={{
        zIndex: 1,
        p: 5,
        boxShadow: (theme) =>
          `0px 48px 80px ${alpha(
            isLight ? theme.palette.grey[500] : theme.palette.common.black,
            0.12
          )}`
      }}
    >
      <Stack spacing={5}>
        <Box
          component="img"
          src={icon}
          sx={{
            width: 64,
            height: 64
            // bgcolor: 'info.main',
            // p: 1,
            // borderRadius: 64,
            // color: 'white'
          }}
        />
        <Typography variant="h4">{title}</Typography>

        <Stack spacing={2.5}>
          <Typography variant="h6" color="text.secondary">
            {description}
          </Typography>
          <Typography color="text.secondary">{caption}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

const features = [
  {
    icon: '/static/icons/ic_responsive.svg',
    title: 'Tùy chỉnh với nhiều đề tài',
    description:
      'Không cần lo về tương thích nhiều phương tiện và tập trung vào thương hiệu của bạn.',
    caption:
      'Tạo giao diện độc đáo cho thương hiệu của bạn bằng các chủ đề tùy chỉnh, đáp ứng tất cả thiết bị hoặc sử dụng giao diện thương hiệu hiện có của bạn để nổi bật so với các đối thủ cạnh tranh.'
  },
  {
    icon: '/static/icons/ic_customer.png',
    title: 'Hỗ trợ khách hàng',
    description: 'Đảm bảo việc giao tiếp ở thời gian thực với khách hàng',
    caption: `Tương tác với khách hàng của bạn bằng cách sử dụng chatbot tích hợp của Reso. Cải thiện sự hài lòng của khách hàng bằng cách giảm thời gian chờ đợi và chi phí hoạt động với một nền tảng trò chuyện phù hợp tại chỗ.`
  },
  {
    icon: '/static/icons/ic_delivery.gif',
    title: 'Quản lý vận chuyển',
    description: 'Nâng cao chất lượng dịch vụ vận chuyển bằng nền tảng đầu cuối.',
    caption:
      'Quản lý lập kế hoạch lộ trình, điều động tự động, theo dõi thời gian thực. Ngoài ra, tự động chỉ định đơn đặt hàng cho các nhóm giao hàng, dựa trên vị trí địa lý của họ và hơn thế nữa.'
  },
  {
    icon: '/static/icons/ic_order.svg',
    title: 'Quản lý đơn hàng',
    description: 'Nhận nhiều đơn hàng hơn với chỉ vài bước.',
    caption:
      'Theo dõi tất cả các đơn đặt hàng từ một nền tảng. Cải thiện trải nghiệm của khách hàng bằng cách tự động hóa hệ thống đặt hàng của bạn, cho phép theo dõi đơn đặt hàng theo thời gian thực và cho phép khách hàng theo dõi đơn đặt hàng.'
  },
  {
    icon: '/static/icons/ic_multilang.svg',
    title: 'Multi-Lingual',
    description: 'Communicate in the language of your target audience.',
    caption:
      'Develop new markets, reach a global audience, and cater to different regions without having a language barrier on your website. Communicate in over 80 languages with your customers and ensure customer retention.'
  }
];

export default function LandingWhitePlatform() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 10, md: 24 }, textAlign: 'center' }}>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" sx={{ textAlign: 'center', mb: 2 }}>
              Sử dụng nền tảng với thương hiệu do bạn làm chủ
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <Typography
              sx={{
                color: isLight ? 'text.secondary' : 'text.primary'
              }}
            >
              Thúc đẩy cho doanh nghiệp của bạn với nhiều tính năng do Yelo cung cấp phù hợp để bạn
              điều hành một công việc kinh doanh toàn diện.
            </Typography>
          </MotionInView>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <MotionInView variants={varFadeInDown}>
              <Stack spacing={4}>
                <FeatureCard feature={features[0]} />
                <FeatureCard feature={features[1]} />
              </Stack>
            </MotionInView>
          </Grid>
          <Grid item xs={12} md={4} position="relative" alignSelf="flex-start">
            <MHidden width="lgDown">
              <MotionInView variants={varFadeInUp}>
                <Box
                  position="absolute"
                  top="-150px"
                  component="img"
                  src="/static/home/HomeFeature.png"
                  sx={{
                    width: 540,
                    zIndex: 0,
                    maxWidth: 'unset',
                    left: '50%',
                    transform: 'translate(-50%,0)'
                  }}
                />
              </MotionInView>
            </MHidden>
            <MotionInView marginTop={isDesktop ? 10 : 0} variants={varFadeInUp}>
              <FeatureCard feature={features[2]} />
            </MotionInView>
          </Grid>
          <Grid item xs={12} md={4}>
            <MotionInView variants={varFadeInDown}>
              <Stack spacing={4}>
                <FeatureCard feature={features[3]} />
              </Stack>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
