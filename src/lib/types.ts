import { Dispatch, SetStateAction } from 'react';

export interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  scrolled: boolean;
}
