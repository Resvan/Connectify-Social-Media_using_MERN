import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';

const Leftbar = () => {
  return (
    <Box flex={2}
      sx={{ display: { xs: "none", lg: "block" } }}
    >
      <Box position="fixed">
        <Box>
          <Box>
            <Card sx={{
              boxShadow: `-1px 6px 5px 0px rgba(0,0,0,0.40)`,
              paddingInline:"1rem"
            }}>
              <Typography margin={"0.5rem"} variant='h6' >
                Suggestion For You
              </Typography>
              <Box margin={"0.5rem"} >
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Box minWidth="max-content">
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Avatar />
                      <Typography variant='span' margin={1}>
                        User Name
                      </Typography>
                    </Stack>
                  </Box>
                  <Box minWidth="max-content">
                    <Button variant="contained" size="small" >Follow</Button>
                    <Button variant="contained" size="small" color='error' sx={{ marginLeft: "0.3rem" }} >Cancel</Button>
                  </Box>
                </Stack>
                <Box>
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>

        <Box >
          <Box>
            <Card sx={{
              marginTop:"1rem",
              boxShadow: `-1px 6px 5px 0px rgba(0,0,0,0.40)`,
              paddingInline: "1rem"
            }}>
              <Typography margin={"0.5rem"} variant='h6' >
                Online Friends
              </Typography>
              <Box margin={"0.5rem"} >
                <Box>
                  <Stack direction="row" >
                    <Badge color="secondary" overlap="circular" badgeContent=" " variant='dot'>
                      <Avatar />
                    </Badge>
                    <Typography variant='span' margin={1}>
                      User Name
                    </Typography>
                  </Stack>
                </Box>
                <Box>
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Leftbar
