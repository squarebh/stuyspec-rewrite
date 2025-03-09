import Image from "next/image";
import Link from "next/link";
import mixed_advertisements from "./MixedAdvertisements";
import styles from "../styles/Advertisement.module.css";

const MixedAdvertisement = (props: { index: number }) => {
  let index = props.index % mixed_advertisements.length;

  return (
    mixed_advertisements.length && (
      <Link href={mixed_advertisements[index].url}>
        <div id={styles.parent_div}>
          <Image
            id={styles.image}
            src={mixed_advertisements[index].image_src}
            fill
            alt={mixed_advertisements[index].name + " ad"}
          />
        </div>
      </Link>
    )
  );
};

export default MixedAdvertisement;
