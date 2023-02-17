import Card from '@mui/material/Card';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";


const Stories = () => {
    const stories = [
        {
            id: 1,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 2,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 3,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 4,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 5,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 6,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 7,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 8,
            name: "John Doe",
            img: "https://www.cristianoronaldo.com/assets/images/brand_eyewear.jpg?832236",
        },
    ];


    return (
      
        <Card>
            <ImageList sx={{
                overflowX: 'auto',
                "&::-webkit-scrollbar": {
                    display: "none"
                }
            }} rowHeight={200}>
                <ImageListItem sx={{
                    display: 'flex', flexDirection: 'row',
                }}>
                    {stories.map(image => {
                        return (
                            <img
                                src={image.img}
                                alt='title'
                                loading='lazy'
                                style={{ paddingRight: '1em' }}
                            />
                        )
                    })}
                </ImageListItem>
            </ImageList>
        </Card>
           
  
    );
}

export default Stories
