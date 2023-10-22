import Authenticated from "@/components/Auth/Authenticated"
import ChangePassword from "@/components/Profile/ChangePassword"

export default function page() {
	return (
		<Authenticated>
			<ChangePassword />
		</Authenticated>
	)
}
