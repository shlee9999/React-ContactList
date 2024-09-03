import { groupsAtom } from '@/atoms';
import { DEFAULT_GROUPS } from '@/constants';
import { useRecoilState } from 'recoil';

export default function useGroups() {
  const [groups, setGroups] = useRecoilState(groupsAtom);
  const addGroup = (group: string) => {
    if (groups.includes(group)) {
      window.alert('중복된 그룹입니다!');
      return;
    }
    setGroups((prev) => [...prev, group].sort()); // 사전순 정렬
  };
  const deleteGroup = (targetGroup: string) => {
    if (DEFAULT_GROUPS.includes(targetGroup)) {
      window.alert('기본 그룹은 지울 수 없어요!');
      return;
    }
    setGroups((prev) => prev.filter((group) => group !== targetGroup));
  };

  return { groups, addGroup, deleteGroup };
}
