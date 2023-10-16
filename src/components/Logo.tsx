import { useMantineColorScheme } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import Play14LogoDark from '/public/logo/play14_black_bg_transparent_500x150.png';
import Play14LogoLight from '/public/logo/play14_white_bg_transparent_500x150.png';

export default function Logo() {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Link href="/">
      <Image src={ dark ? Play14LogoDark : Play14LogoLight } width={166} height={50} alt="play14 logo" />
    </Link>
  )
}
