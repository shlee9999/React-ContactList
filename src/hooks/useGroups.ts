import { contactInfosAtom, groupsAtom } from '@/atoms';
import { DEFAULT_GROUPS } from '@/constants';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function useGroups() {
  const [groups, setGroups] = useRecoilState(groupsAtom);
  const contactInfos = useRecoilValue(contactInfosAtom);
  const addGroup = (group: string) => {
    if (groups.includes(group)) {
      window.alert('중복된 그룹입니다!');
      return;
    }
    setGroups((prev) => [...prev, group].sort()); // 사전순 정렬
  };
  const isDefaultGroup = (group: string) => {
    return DEFAULT_GROUPS.includes(group);
  };
  const isDeletable = (group: string) => {
    if (isDefaultGroup(group)) return false;
    if (contactInfos.some((contactInfo) => contactInfo.group === group))
      return false;
    return true;
  };
  const deleteGroup = (targetGroup: string) => {
    if (isDefaultGroup(targetGroup)) {
      window.alert('기본 그룹은 지울 수 없어요!');
      return;
    }
    if (!isDeletable(targetGroup)) {
      window.alert('그룹에 저장된 연락처가 있으면 지울 수 없어요!');
      return;
    }
    setGroups((prev) => prev.filter((group) => group !== targetGroup));
  };

  return { groups, addGroup, deleteGroup, isDefaultGroup, isDeletable };
}
