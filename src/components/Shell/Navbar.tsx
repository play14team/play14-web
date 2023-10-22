import { NavLink } from "@mantine/core"
import { IconActivity, IconCalendar, IconGauge, IconHome2, IconList, IconUsersGroup } from "@tabler/icons-react"
import Link from "next/link"

export default function Navbar() {
	return (
		<>
			<NavLink label="Home" href="/" component={Link} leftSection={<IconHome2 size="1rem" stroke={1.5} />} />

			<NavLink label="Events" leftSection={<IconGauge size="1rem" stroke={1.5} />} active>
				<NavLink
					label="Upcoming"
					href="/events/upcoming"
					component={Link}
					leftSection={<IconCalendar size="1rem" stroke={1.5} />}
					variant="subtle"
					active
				/>
				<NavLink
					label="All"
					href="/events"
					component={Link}
					leftSection={<IconList size="1rem" stroke={1.5} />}
					variant="subtle"
				/>
			</NavLink>

			<NavLink label="Players" leftSection={<IconUsersGroup size="1rem" stroke={1.5} />}>
				<NavLink
					label="Me"
					href="/me"
					component={Link}
					leftSection={<IconActivity size="1rem" stroke={1.5} />}
					variant="subtle"
				/>
				<NavLink
					label="All"
					href="/players"
					component={Link}
					leftSection={<IconList size="1rem" stroke={1.5} />}
					variant="subtle"
				/>
			</NavLink>
		</>
	)
}
