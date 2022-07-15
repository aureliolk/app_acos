import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react"

export const BoxSocial = () => {
    return (
        <div className=" text-yellow-100 bg-gradient-to-t from-orange-900 to-gray-900 rounded rounded-r-none  flex flex-col p-1 fixed right-0 bottom-2/4 text-3xl gap-2 ">
            <a href="https://github.com/aureliolk" className=" h-9 w-9 flex justify-center items-center "><GithubLogo className="hover:text-[32px] transition-all" /></a>
            <a href="https://linkedin.com/aureliolk" className=" h-9 w-9 flex justify-center items-center"><LinkedinLogo className="hover:text-[32px] transition-all" /></a>
            <a href="https://instagran.com/aureliolk" className=" h-9 w-9 flex justify-center items-center"><InstagramLogo className="hover:text-[32px] transition-all" /></a>
        </div>
    )
}