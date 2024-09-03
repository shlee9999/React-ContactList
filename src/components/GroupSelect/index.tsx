import { useRecoilValue } from 'recoil';
import { groupsAtom } from '@/atoms';

interface GroupSelectProps {
  defaultValue?: string;
}
export default function GroupSelect({ defaultValue }: GroupSelectProps) {
  const groups = useRecoilValue(groupsAtom);

  return (
    <select name='group' defaultValue={defaultValue}>
      {groups.map((group, index) => (
        <option key={index} value={group}>
          {group}
        </option>
      ))}
    </select>
  );
}
