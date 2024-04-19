import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}

const PlatformListIcon = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType} ={
        playstation: FaPlaystation,
        pc: FaWindows,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        ios: MdPhoneIphone,
        android: FaAndroid,
        web: BsGlobe,
        linux: FaLinux
    }
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>
  );
};

export default PlatformListIcon;
