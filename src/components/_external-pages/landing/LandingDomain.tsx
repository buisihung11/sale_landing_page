import { useRef } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import roundArrowRightAlt from '@iconify/icons-ic/round-arrow-right-alt';
import instagramFilled from '@iconify/icons-ant-design/instagram-filled';
// material
import { useTheme } from '@material-ui/core/styles';
import { Box, Card, Button, Container, Typography, IconButton } from '@material-ui/core';
// utils
import mockData from '../../../utils/mock-data';
//
import { varFadeIn, varFadeInUp, MotionInView, varFadeInDown } from '../../animate';
import { CarouselControlsArrowsBasic2 } from '../../carousel';

// ----------------------------------------------------------------------

const MOCK_MEMBERS = [
  {
    title: 'F&B',
    caption: '',
    image: '/static/home/food_domain.jpg'
  },
  {
    title: 'Tạp hóa',
    caption: '',
    image: '/static/home/grocery_domain.jpg'
  },
  {
    title: 'Tiệm thuốc',
    caption: '',
    image: '/static/home/pharmacy_domain.jpg'
  },
  {
    title: 'Quần áo',
    caption: '',
    image: '/static/home/fashion_domain.jpg'
  }
];

// ----------------------------------------------------------------------

type MemberCardProps = {
  member: {
    title: string;
    caption: string | undefined;
    image: string;
  };
};

function MemberCard({ member }: MemberCardProps) {
  const { title: name, caption: role, image: avatar } = member;
  return (
    <Card key={name} sx={{ p: 1, mx: 1.5 }}>
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 0.5 }}>
        {name}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
        {role}
      </Typography>
      <Box component="img" src={avatar} sx={{ width: '100%', height: 165, borderRadius: 1.5 }} />
      <Box py={2}>
        <Button
          variant="text"
          endIcon={<Icon icon={roundArrowRightAlt} width={24} height={24} />}
          sx={{ mx: 'auto' }}
        >
          Xem thử
        </Button>
      </Box>
    </Card>
  );
}

export default function LandingDomain() {
  const carouselRef = useRef<Slider>(null);
  const theme = useTheme();

  const settings = {
    slidesToShow: 4,
    centerMode: true,
    centerPadding: '0 80px',
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Container maxWidth="lg" sx={{ pb: 10, textAlign: 'center' }}>
      <MotionInView variants={varFadeInUp}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Một nền tảng cho mọi ngành kinh doanh
        </Typography>
      </MotionInView>

      <MotionInView variants={varFadeInUp}>
        <Typography
          sx={{
            mb: 10,
            mx: 'auto',
            maxWidth: 630,
            color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white')
          }}
        >
          Khám phá nhiều ngành nghề và chọn nghề phù hợp nhất với bạn.
        </Typography>
      </MotionInView>

      <Box sx={{ position: 'relative' }}>
        <Slider ref={carouselRef} {...settings}>
          {MOCK_MEMBERS.map((member) => (
            <MotionInView key={member.title} variants={varFadeIn}>
              <MemberCard member={member} />
            </MotionInView>
          ))}
        </Slider>
        <CarouselControlsArrowsBasic2
          onNext={handleNext}
          onPrevious={handlePrevious}
          sx={{ transform: 'translateY(-15px)' }}
        />
      </Box>
    </Container>
  );
}
