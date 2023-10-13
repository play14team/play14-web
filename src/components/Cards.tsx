'use client'

import { Grid } from "@mantine/core";
import EventCard from "./EventCard";

export default function Cards() {
  return (
    <Grid justify='space-around'>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}><EventCard /></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}><EventCard /></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}><EventCard /></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}><EventCard /></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}><EventCard /></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}><EventCard /></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}><EventCard /></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}><EventCard /></Grid.Col>
    </Grid>
  )
}
