import { Stack } from '@mui/material';
import { courseData } from '../../constant/courseData';
import CardItem from '../../components/card/CardItem';

const CourseList = () => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ maxWidth: 640, marginLeft: 'auto', marginRight: 'auto', overflow: 'scroll' }}
    >
      {courseData.map((course) => (
        <CardItem props={{ ...course, width: 118, height: 269, button: 'Take course' }} key={course.id} />
      ))}
    </Stack>
  );
};

export default CourseList;
