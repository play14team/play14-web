import Authenticated from "@/components/Auth/Authenticated"
import Profile from "@/components/Profile/Profile"

export default function ProfilePage() {
	return (
		<Authenticated>
			<Profile />
		</Authenticated>
	)
}
