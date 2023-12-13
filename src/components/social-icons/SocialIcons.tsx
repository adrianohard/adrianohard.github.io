import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedinSquare } from 'react-icons/bi'

export const SocialIcons = () => {
  return (
    <div id="social-icons" className="flex gap-4 text-primary-dark items-center justify-center mt-4 ">
        <BiLogoGithub size="28" className="cursor-pointer" />
        <BiLogoInstagram size="28" className="cursor-pointer" />
        <BiLogoLinkedinSquare size="28" className="cursor-pointer" />
    </div>
  )
}
