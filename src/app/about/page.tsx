import { ClientsTestimonial } from "@/components/ClientsTestimonial";
import { Moto } from "@/components/Moto";
import Profile from "@/components/Profile";

export default function About() {
  return (
    <main className="">
      <Profile />
      <Moto />
      <ClientsTestimonial/>
    </main>
  );
}
