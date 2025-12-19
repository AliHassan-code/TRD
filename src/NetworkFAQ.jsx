import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FAQ from './assets/FAQ.svg';
import { Box, Divider, Grid2 } from '@mui/material';

export const NetworkFAQ = () => {
  return (
    <>
      <Box>
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
            TRD Network FAQ
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
            background: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Grid2
            container
            spacing={{ xs: 0, md: 4 }}
            alignItems="center"
            justifyContent="center"
            sx={{ maxWidth: 1200, mx: 'auto' }}
          >
            {/* Image */}
            <Grid2
              xs={12}
              md={5}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box sx={{ maxWidth: 320, width: '100%' }}>
                <img
                  src={FAQ}
                  alt="FAQ"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </Box>
            </Grid2>
            {/* FAQ Accordions */}
            <Grid2
              xs={12}
              md={7}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                alignItems: 'center',
              }}
            >
              <Accordion
                sx={{
                  background:
                    'linear-gradient(180deg, rgba(140,239,120,0.2) 0%, rgba(31,130,7,0.2) 100%)',
                  borderRadius: '12px',
                  boxShadow: 'none',
                  width: '100%',
                  maxWidth: { xs: 360, sm: 400, md: 540 },
                  color: '#fff',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<KeyboardArrowDownIcon sx={{ color: '#fff' }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#fff',
                    minHeight: 56,
                    '& .MuiAccordionSummary-content': {
                      my: 1,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Orbitron, sans-serif',
                      fontSize: '13px',
                      color: '#fff',
                    }}
                  >
                    Lorem Ipsum Is Simply Dummy Text Of The Printing
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#fff',
                    fontSize: '14px',
                    background: 'transparent',
                    borderRadius: '0 0 12px 12px',
                  }}
                >
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </AccordionDetails>
              </Accordion>

              <Accordion
                sx={{
                  background:
                    'linear-gradient(180deg, rgba(140,239,120,0.2) 0%, rgba(31,130,7,0.2) 100%)',
                  borderRadius: '12px',
                  boxShadow: 'none',
                  width: '100%',
                  maxWidth: { xs: 360, sm: 400, md: 540 },
                  color: '#fff',
                  border: '1.5px solid #E5E5E5',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<KeyboardArrowDownIcon sx={{ color: '#FFF' }} />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  sx={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#fff',
                    minHeight: 56,
                    '& .MuiAccordionSummary-content': {
                      my: 1,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Orbitron, sans-serif',
                      fontSize: '13px',
                      color: '#fff',
                    }}
                  >
                    Lorem Ipsum Is Simply Dummy Text Of The Printing
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#fff',
                    fontSize: '14px',
                    background: 'transparent',
                    borderRadius: '0 0 12px 12px',
                  }}
                >
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </AccordionDetails>
              </Accordion>

              <Accordion
                sx={{
                  background:
                    'linear-gradient(180deg, rgba(140,239,120,0.2) 0%, rgba(31,130,7,0.2) 100%)',
                  borderRadius: '12px',
                  boxShadow: 'none',
                  width: '100%',
                  maxWidth: { xs: 360, sm: 400, md: 540 },
                  color: '#fff',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<KeyboardArrowDownIcon sx={{ color: '#fff' }} />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                  sx={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#fff',
                    minHeight: 56,
                    '& .MuiAccordionSummary-content': {
                      my: 1,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Orbitron, sans-serif',
                      fontSize: '13px',
                      color: '#fff',
                    }}
                  >
                    Lorem Ipsum Is Simply Dummy Text Of The Printing
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#fff',
                    fontSize: '14px',
                    background: 'transparent',
                    borderRadius: '0 0 12px 12px',
                  }}
                >
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </AccordionDetails>
              </Accordion>

              <Accordion
                sx={{
                  background:
                    'linear-gradient(180deg, rgba(140,239,120,0.2) 0%, rgba(31,130,7,0.2) 100%)',
                  borderRadius: '12px',
                  boxShadow: 'none',
                  width: '100%',
                  maxWidth: { xs: 360, sm: 400, md: 540 },
                  color: '#fff',
                  border: '1.5px solid #E5E5E5',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<KeyboardArrowDownIcon sx={{ color: '#fff' }} />}
                  aria-controls="panel4-content"
                  id="panel4-header"
                  sx={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#fff',
                    minHeight: 56,
                    '& .MuiAccordionSummary-content': {
                      my: 1,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Orbitron, sans-serif',
                      fontSize: '13px',
                      color: '#fff',
                    }}
                  >
                    Lorem Ipsum Is Simply Dummy Text Of The Printing
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#fff',
                    fontSize: '14px',
                    background: 'transparent',
                    borderRadius: '0 0 12px 12px',
                  }}
                >
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </AccordionDetails>
              </Accordion>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </>
  );
};
