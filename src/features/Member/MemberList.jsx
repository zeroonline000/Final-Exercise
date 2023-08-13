/* eslint-disable react/jsx-key */
import { Stack } from '@mui/material';
import { memberData } from '../../constant/memberData';
import CardItem from '../../components/card/CardItem';

const MemberList = () => {
  return (
    <Stack direction="row" spacing="12px" sx={{ marginLeft: 'auto', marginRight: 'auto', overflow: 'scroll' }}>
      {memberData.map((member) => (
        <CardItem props={{ ...member, height: 286, width: 158, button: 'Follow' }} key={member.id} />
      ))}
    </Stack>
  );
};

export default MemberList;
