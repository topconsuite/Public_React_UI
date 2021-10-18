/**
 * Component example
 */
import * as React from 'react';
import Avatar from '../../atoms/avatar';
import Favorite from '../../atoms/favorite';
import Name from '../../atoms/name';
import Role from '../../atoms/role';

import { ContainerAtoms, ContainerUserInfos } from './styles';

interface userProps {
  avatarLetter: string;
  userName: string;
  roleDescription: string;
  containerColor?: string;
}

const user: React.FC<userProps> = ({
  avatarLetter,
  userName,
  roleDescription,
  containerColor,
}) => (
  <ContainerAtoms backgroundColor={containerColor}>
    <div style={{ width: '30px', height: '30px', fontSize: '20px' }}>
      <Avatar letter={avatarLetter} />
    </div>
    <ContainerUserInfos>
      <Name name={userName} />
      <Role description={roleDescription} />
    </ContainerUserInfos>
    <Favorite />
  </ContainerAtoms>
);

export default user;
