import useCurrentUser from '@/hooks/useCurrentUser'
import { signOut } from 'next-auth/react'
import { FC } from 'react'
interface AccountMenuProps {
  visible?: boolean
}

const AccountMenu: FC<AccountMenuProps> = ({ visible }) => {
  const { data } = useCurrentUser()
  if (!visible) {
    return null
  }
  return (
    <div className="bg-black w-36 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800">
      <div className="flex flex-col gap-3">
        <div className="px-3 flex flex-row gap-3 items-center w-full">
          <img
            className="w-10 rounded-md"
            src="/images/default-blue.png"
            alt="Profile photo"
          />
          <p className="text-white text-sm hover:text-gray-300 transition">
            {data?.name}
          </p>
        </div>
        <hr className="bg-gray-600 border-1 h-px my-2" />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-white text-sm hover:text-gray-300 transition"
        >
          Sign out
        </div>
      </div>
    </div>
  )
}
export default AccountMenu
