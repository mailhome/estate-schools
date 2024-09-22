import Link from "next/link"


const portal_routes = [
    {
        label: "Staff Login",
        href: "/staff-login"
    },
    {
        label: "Student Login",
        href: "/student-login"
    },


]

export const PortalContents = () => {
    return (
        <div className='flex items-start flex-col justify-start bg-neutral-100'>
            {portal_routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className="2xl:text-sm text-xs hover:bg-neutral-200 text-[#8C3239] w-full py-4 px-2">
                    {route.label}
                </Link>
            ))}
        </div>
    )
}
