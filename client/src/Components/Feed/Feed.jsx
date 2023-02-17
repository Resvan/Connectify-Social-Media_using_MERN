import Box from '@mui/material/Box';
import Post from '../Post/Post';
import Stories from '../Stories/Stories';


const Feed = () => {
  return (
    <Box flex={4}>
      <Stories />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Box>
  )
}

export default Feed
