import { useState } from 'react';
import icon from '../assets/icon.png';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemIcon,
  Button,
} from '@mui/material';
import arrow from '../assets/arrow.svg';
import live from '../assets/live.svg';
import vector2 from '../assets/Vector2.png';
import vector1 from '../assets/Vector1.png';
import MenuIcon from '@mui/icons-material/Menu';

export default function ResponsiveNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = open => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',

          p: { xs: 1, md: 4 },
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="home"
            onClick={() => alert('Home clicked')}
          >
            <Box
              sx={{
                backgroundImage: `url(${vector2})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src={icon}
                sx={{
                  padding: {
                    xs: '15px 40px 15px 25px',
                    lg: '15px 80px 15px 50px',
                  },
                  width: '130px',
                }}
              />
            </Box>
          </IconButton>
          <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <Box
              sx={{
                backgroundImage: `url(${vector1})`,
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                justifyContent: 'space-around',
                backgroundSize: '100% 100%',
                alignItems: 'center',
                padding: { xs: '0px', lg: '15px 70px' },
              }}
            >
              <Box sx={{ display: 'flex', gap: 2 }}></Box>

              <Button
                sx={{
                  display: {
                    xs: 'none',
                    md: 'none',
                    lg: 'inline-flex',
                    marginLeft: '10px',
                    fontsize: '12px',
                    color: '#fff',
                  },
                  gap: 1,
                }}
              >
                SOLUTIONS
                <img src={arrow} />
              </Button>
              <Button
                sx={{
                  display: {
                    xs: 'none',
                    md: 'none',
                    lg: 'inline-flex',
                    marginLeft: '10px',
                    fontsize: '12px',
                    color: '#fff',
                  },
                  gap: 1,
                }}
              >
                PRESALE
                <img src={live} />
              </Button>
              <Button
                sx={{
                  display: {
                    xs: 'none',
                    md: 'none',
                    lg: 'inline-flex',
                    marginLeft: '10px',
                    fontsize: '12px',
                    color: '#fff',
                  },
                }}
              >
                DOCUMENTS
                <img src={arrow} />
              </Button>
              <Button
                sx={{
                  display: {
                    xs: 'none',
                    md: 'none',
                    lg: 'inline-flex',
                    marginLeft: '10px',
                    fontsize: '12px',
                    color: '#fff',
                  },
                  gap: 1,
                }}
              >
                COMMUNITY
                <img src={arrow} />
              </Button>

              <Button
                sx={{
                  display: {
                    xs: 'none',
                    md: 'none',
                    lg: 'inline-flex',
                    marginLeft: '10px',
                    fontsize: '12px',
                    color: '#fff',
                  },
                }}
              >
                CONTACT
              </Button>

              <Button
                variant="contained"
                sx={{
                  display: { xs: 'none', md: 'none', lg: 'inline-flex' },
                  fontFamily: 'Inter',
                  background: 'linear-gradient(45deg, #1F1F1F , #6A6666 )',
                  border: '1px solid #8CEF78',
                  fontSize: '15px',
                  ml: 3,
                }}
              >
                CONNECT
              </Button>
            </Box>
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              display: {
                xs: 'block',
                md: 'block',
                lg: 'none',
              },
            }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        PaperProps={{
          sx: {
            backgroundColor: '#171919',
            color: 'white',
          },
        }}
        onClose={toggleDrawer(false)}
      >
        <List sx={{ width: 350, mt: 2 }}>
          <ListItem>
            <Button
              variant="text"
              sx={{
                color: '#fff',
                gap: 1,
                fontSize: '15px',
                width: '100%',
              }}
            >
              SOLUTIONS
              <img src={arrow} />
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="text"
              sx={{
                color: '#fff',
                gap: 1,
                fontSize: '15px',
                width: '100%',
              }}
            >
              PRESALE
              <img src={live} />
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="text"
              sx={{
                color: '#fff',
                gap: 1,
                fontSize: '15px',
                width: '100%',
              }}
            >
              DOCUMENTS
              <img src={arrow} />
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="text"
              sx={{
                color: '#fff',
                gap: 1,
                fontSize: '15px',
                width: '100%',
              }}
            >
              COMMUNITY
              <img src={arrow} />
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="text"
              sx={{
                color: '#fff',
                gap: 1,
                fontSize: '15px',
                width: '100%',
              }}
            >
              CONTACT
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="contained"
              sx={{
                fontFamily: 'Inter',
                background: 'linear-gradient(45deg, #1F1F1F , #6A6666 )',
                border: '1px solid #8CEF78',
                fontSize: '15px',
                width: '100%',
              }}
            >
              CONNECT
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
