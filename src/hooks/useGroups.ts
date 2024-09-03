import { groupsAtom } from '@/atoms';
import { useRecoilState } from 'recoil';

export default function useGroups() {
  const [groups, setGroups] = useRecoilState(groupsAtom);
  const addGroup = (group: string) => {
    setGroups((prev) => [...prev, group].sort()); // 사전순 정렬
  };
  const deleteGroup = (targetGroup: string) => {
    setGroups((prev) => prev.filter((group) => group !== targetGroup));
  };

  return { groups, addGroup, deleteGroup };
}
