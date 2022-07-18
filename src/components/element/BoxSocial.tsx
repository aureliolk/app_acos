import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react"

export const BoxSocial = () => {
    return (
        <div className=" text-yellow-100 bg-gradient-to-t from-orange-900/80 to-gray-900/80 rounded rounded-r-none  flex flex-col  fixed right-0 bottom-2/4 p-2 text-4xl  lg:p-1 lg:text-3xl gap-2 gap-y-4  z-50 ">
            <a href="https://github.com/aureliolk" className=" h-9 w-9 flex justify-center items-center "><GithubLogo className="hover:text-[32px] transition-all" /></a>
            <a href="https://www.linkedin.com/in/aureliolk/ " className=" h-9 w-9 flex justify-center items-center"><LinkedinLogo className="hover:text-[32px] transition-all" /></a>
            <a href="https://www.instagram.com/aureliolk/" className=" h-9 w-9 flex justify-center items-center"><InstagramLogo className="hover:text-[32px] transition-all" /></a>
        </div>
    )
}