import { Certifications } from "./sections/certifications";
import { Immatriculation } from "./sections/immatriculation";
import { ProfileType } from "./sections/ProfileType";
import { Satisfaction } from "./sections/satisfaction";
import { Testimonials } from "./sections/testimonials";

export default function Home() {
  return (
    <div>
      <ProfileType />
      <Certifications />
      <Testimonials />
      <Satisfaction />
      <Immatriculation />
    </div>
  );
}
