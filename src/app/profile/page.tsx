import Authenticated from "@/components/Auth/Authenticated"
import Profile from "@/components/Auth/Profile"

export default function ProfilePage() {
	return (
		<Authenticated>
			<Profile />
		</Authenticated>
	)
}
