import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material';

const StyledCard = styled(Card)({
  "&::WebkitBoxShadow": `0px 0px 25px -10px rgba(0, 0, 0, 0.38)`,
  "&::MozBoxShadow": `0px 0px 25px -10px rgba(0, 0, 0, 0.38)`,
  boxShadow: `0px 0px 25px -10px rgba(0, 0, 0, 0.38)`,
});


const Rightbar = () => {
  return (
    <Box flex={2}
      sx={{ display: { xs: "none", lg: "block" } }}
    >
      <Box position="fixed">
        <Box>
          <Box>
            <StyledCard sx={{
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
            </StyledCard>
          </Box>
        </Box>

        <Box >
          <Box>
            <StyledCard sx={{
              marginTop:"1rem",
              paddingInline: "1rem"
            }}>
              <Typography margin={"0.5rem"} variant='h6' >
                Online Friends
              </Typography>
              <Box margin={"0.5rem"} >
                <Box>
                  <Stack direction="row" >
                    <Badge color="secondary" overlap="circular" badgeContent=" " >
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
            </StyledCard>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Rightbar
