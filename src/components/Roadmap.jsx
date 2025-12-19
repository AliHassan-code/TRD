import { Box, Container, Divider, Typography } from '@mui/material';
import End from '../assets/End.png';
import Elipse1 from '../assets/Ellipse3.png';
import Elipse2 from '../assets/Ellipse4.png';

export const Roadmap = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          width: '100%',
          height: '100px',
          mt: 1.5,
        }}
      >
        <Divider
          sx={{
            width: { xs: '15%', md: '20%', lg: '25%' },
            height: '2px',
            background: 'linear-gradient(to right, transparent, #01AD6B)',
          }}
        />
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontFamily: 'Orbitron, sans-serif',
            letterSpacing: 1,
            fontSize: { xs: '22px', sm: '28px', md: '30px', lg: '36px' },
            whiteSpace: 'nowrap',
            color: '#fff',
          }}
        >
          ROADMAP
        </Typography>
        <Divider
          sx={{
            width: { xs: '15%', md: '20%', lg: '25%' },
            height: '2px',
            background: 'linear-gradient(to left, transparent, #01AD6B)',
          }}
        />
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${Elipse1}), url(${Elipse2})`,
          backgroundPosition: 'top right, bottom left',
          backgroundRepeat: 'no-repeat, no-repeat',
        }}
      >
        <Container>
          <Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                WebkitBoxAlign: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  background: 'linear-gradient(180deg, #01AD6B, #47E261)',
                  zIndex: 1,
                  borderRadius: '50%',
                  padding: 2,
                }}
              />
              <Box
                sx={{
                  width: '3%',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'initial',
                  borderImageWidth: 'initial',
                  borderImageOutset: 'initial',
                  borderImageRepeat: 'initial',
                  borderImageSource:
                    'radial-gradient(105.33% 296.98% at 18.67% 14.93%, rgb(74, 62, 124) 0%, rgb(208, 71, 143) 42.19%, rgb(212, 114, 146) 99.99%, rgb(165, 128, 227) 100%)',
                  borderImageSlice: 1,
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  width: '60%',
                }}
              >
                <Box
                  sx={{
                    background: 'linear-gradient(180deg, #01AD6B, #47E261)',
                    padding: 1,
                  }}
                >
                  <Typography color="#fff" fontFamily="Orbitron, sans-serif">
                    Phase 1
                  </Typography>
                </Box>
                <Box
                  sx={{
                    background: 'linear-gradient(180deg, #01AD6B, #47E261)',
                    height: 2,
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  WebkitBoxAlign: 'center',
                  alignItems: 'center',
                  marginTop: -2,
                  width: '100%',
                  zIndex: -3,
                }}
              >
                <Box
                  sx={{
                    borderLeft: '2px solid transparent',
                    borderBottom: '2px solid transparent',
                    borderImage:
                      'linear-gradient(90deg, #01AD6B  0%, #47E261) 1 / 1 / 0 stretch',
                    paddingLeft: '24px',
                    paddingBottom: '24px',
                    marginLeft: '16px',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      marginTop: 5,
                    }}
                  >
                    <Box
                      sx={{
                        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 3.28px 32.79px 0px',
                        clipPath:
                          'polygon(0px 0px, 96% 0px, 100% 60px, 100% 100%, 0px 100%)',
                        paddingLeft: '24px',
                        paddingRight: '32px',
                        paddingTop: '24px',
                        paddingBottom: '24px',
                        background:
                          'linear-gradient(to right, #1E1F1F, #2A2A2A)',
                      }}
                    >
                      <Typography color="#fff">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                paddingTop: 2,
                paddingBottom: 2,
                borderRight: '2px solid #47E261',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                WebkitBoxAlign: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  background: 'transparent',
                  zIndex: 1,
                  borderRadius: '50%',
                  padding: 2,
                }}
              />
              <Box
                sx={{
                  width: '3%',
                  borderWidth: '0px',
                  borderStyle: 'solid',
                  borderColor: 'initial',
                  borderImageWidth: 'initial',
                  borderImageOutset: 'initial',
                  borderImageRepeat: 'initial',
                  borderImageSource: 'transparent',
                  borderImageSlice: 1,
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  width: '60%',
                }}
              >
                <Box
                  sx={{
                    background: 'linear-gradient(180deg, #01AD6B, #47E261)',
                    padding: 1,
                  }}
                >
                  <Typography color="#fff" fontFamily="Orbitron, sans-serif">
                    Phase 2
                  </Typography>
                </Box>
                <Box
                  sx={{
                    background: 'linear-gradient(180deg, #01AD6B, #47E261)',
                    height: 2,
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  WebkitBoxAlign: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Box
                  sx={{
                    borderRight: '2px dashed #47E261',
                    borderBottom: '2px dashed #47E261',
                    paddingRight: '16px',
                    paddingBottom: '24px',
                    marginLeft: '16px',
                    mt: '50px',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      marginTop: -3,
                    }}
                  >
                    <Box
                      sx={{
                        width: '40px',
                        position: 'absolute',
                        transform: 'rotate(-10deg)',
                        top: 0,
                        right: 0,
                      }}
                    >
                      <img src={End} alt="" />
                    </Box>
                    <Box
                      sx={{
                        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 3.28px 32.79px 0px',
                        clipPath:
                          'polygon(0px 0px, 96% 0px, 100% 60px, 100% 100%, 0px 100%)',
                        paddingLeft: '24px',
                        paddingRight: '32px',
                        paddingTop: '24px',
                        paddingBottom: '24px',
                        background:
                          'linear-gradient(to right, #1E1F1F, #2A2A2A)',
                      }}
                    >
                      <Typography color="#fff">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum. Lorem
                        Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                paddingTop: '16px',
                paddingBottom: '16px',
                marginLeft: '16px',
                borderLeft: '2px dashed #47E261',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                WebkitBoxAlign: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  background: '#151515',
                  border: '2px solid #47E261',
                  zIndex: 1,
                  borderRadius: '50%',
                  padding: 2,
                }}
              />
              <Box
                sx={{
                  width: '3%',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'initial',
                  borderImageWidth: 'initial',
                  borderImageOutset: 'initial',
                  borderImageRepeat: 'initial',
                  borderImageSource:
                    'radial-gradient(105.33% 296.98% at 18.67% 14.93%, rgb(74, 62, 124) 0%, rgb(208, 71, 143) 42.19%, rgb(212, 114, 146) 99.99%, rgb(165, 128, 227) 100%)',
                  borderImageSlice: 1,
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  width: '60%',
                }}
              >
                <Box
                  sx={{
                    background: 'linear-gradient(180deg, #01AD6B, #47E261)',
                    padding: 1,
                  }}
                >
                  <Typography color="#fff" fontFamily="Orbitron, sans-serif">
                    Phase 3
                  </Typography>
                </Box>
                <Box
                  sx={{
                    background: 'linear-gradient(180deg, #01AD6B, #47E261)',
                    height: 2,
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  WebkitBoxAlign: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Box
                  sx={{
                    borderLeft: '2px dashed #47E261',
                    borderBottom: '2px dashed #47E261',
                    paddingLeft: '16px',
                    paddingBottom: '24px',
                    marginLeft: '16px',
                    mt: '50px',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      marginTop: -3,
                    }}
                  >
                    <Box
                      sx={{
                        width: '40px',
                        position: 'absolute',
                        transform: 'rotate(-10deg)',
                        top: 0,
                        right: 0,
                      }}
                    >
                      <img src={End} alt="" />
                    </Box>
                    <Box
                      sx={{
                        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 3.28px 32.79px 0px',
                        clipPath:
                          'polygon(0px 0px, 96% 0px, 100% 60px, 100% 100%, 0px 100%)',
                        paddingLeft: '24px',
                        paddingRight: '32px',
                        paddingTop: 10,
                        paddingBottom: 5,
                        background:
                          'linear-gradient(to right, #1E1F1F, #2A2A2A)',
                      }}
                    >
                      <Typography color="#fff">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum. Lorem
                        Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                paddingTop: '20px',
                paddingBottom: '10px',
                marginLeft: '16px',
                borderRight: '2px dashed #47E261',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                WebkitBoxAlign: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  background: 'transparent',
                  zIndex: 1,
                  borderRadius: '50%',
                  padding: 2,
                }}
              />
              <Box
                sx={{
                  width: '3%',
                  borderWidth: '0px',
                  borderStyle: 'solid',
                  borderColor: 'none',
                  borderImageWidth: 'initial',
                  borderImageOutset: 'initial',
                  borderImageRepeat: 'initial',
                  borderImageSource: 'none',
                  borderImageSlice: 1,
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  width: '60%',
                }}
              >
                <Box
                  sx={{
                    background: 'linear-gradient(180deg, #01AD6B, #47E261)',
                    padding: 1,
                  }}
                >
                  <Typography color="#fff" fontFamily="Orbitron, sans-serif">
                    Phase 4
                  </Typography>
                </Box>
                <Box
                  sx={{
                    background: 'linear-gradient(180deg, #01AD6B, #47E261)',
                    height: 2,
                  }}
                />
              </Box>
              <Box
                sx={{
                  background: '#151515',
                  border: '2px solid #47E261',
                  borderRadius: '50%',
                  padding: '16px',
                  position: 'absolute',
                  right: '-15px',
                }}
              />
            </Box>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  WebkitBoxAlign: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Box
                  sx={{
                    borderRight: '2px dashed #47E261',
                    borderBottom: '2px dashed #47E261',
                    paddingRight: '16px',
                    paddingBottom: '24px',
                    marginLeft: '16px',
                    mt: '50px',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      marginTop: -3,
                    }}
                  >
                    <Box
                      sx={{
                        width: '40px',
                        position: 'absolute',
                        transform: 'rotate(-10deg)',
                        top: 0,
                        right: 0,
                      }}
                    >
                      <img src={End} alt="" />
                    </Box>
                    <Box
                      sx={{
                        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 3.28px 32.79px 0px',
                        clipPath:
                          'polygon(0px 0px, 96% 0px, 100% 60px, 100% 100%, 0px 100%)',
                        paddingLeft: '24px',
                        paddingRight: '32px',
                        paddingTop: '24px',
                        paddingBottom: '24px',
                        background:
                          'linear-gradient(to right, #1E1F1F, #2A2A2A)',
                      }}
                    >
                      <Typography color="#fff">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum. Lorem
                        Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                paddingTop: '16px',
                paddingBottom: '16px',
                marginLeft: '16px',
                borderLeft: '2px dashed #47E261',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                WebkitBoxAlign: 'center',
                alignItems: 'center',
                position: 'relative',
                top: '-20px',
              }}
            >
              <Box
                sx={{
                  background: 'linear-gradient(180deg, #01AD6B, #47E261)',
                  borderRadius: '50%',
                  padding: '16px',
                }}
              ></Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
