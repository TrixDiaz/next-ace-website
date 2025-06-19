interface LogoProps {
    name?: string,
    secondary?: string,
}


function Logo({
                  name = "ACE", // Default Value if null
                  secondary = "DIAGNOSTICS" // Default Value if null
              }: LogoProps) {
    return <>
        <div className="flex flex-row font-zapf text-primary dark:text-white items-end gap-0.5">
            <p className="text-3xl ">{name}</p>
            <p className="text-xl">{secondary}</p>
        </div>
    </>
}

export default Logo;