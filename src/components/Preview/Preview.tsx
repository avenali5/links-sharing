import React, { Dispatch, SetStateAction, useState } from "react";
import Builder from "../Builder/Builder";
import Button from "../Button/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { PreviewModal } from "./Preview.style";
import { useProfileStore } from "@/store/profile";
import { useLinksStore } from "@/store/links";
import { shortenUrl } from "@/utils/hooks/useShortUrl";
import Modal from "../Modal/Modal";
import { ProfileInfo } from "@/utils/types/types";
import Spinner from "../Spinner/Spinner";

type Props = {
  setPreview?: Dispatch<SetStateAction<boolean>>;
  preview: boolean;
};

const Preview = ({ preview, setPreview }: Props) => {
  const { profileInfo } = useProfileStore();
  const { links } = useLinksStore();
  const [modal, setModal] = useState(false);
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showFullURL, setShowFullURL] = useState(false);
  let query: ProfileInfo = {
    fullName: profileInfo.fullName,
    job: profileInfo.job,
    email: profileInfo.email,
    color: profileInfo.color,
    bio: profileInfo.bio,
  };

  links.forEach(link => {
    query[link.platform] = link.link;
  });

  const generateShortUrl = () => {
    const url = `https://${window.location.host}/user?${
      profileInfo.fullName && `fullName=${profileInfo.fullName}`
    }&${profileInfo.job && `job=${profileInfo.job}`}&${
      profileInfo.email && `email=${profileInfo.email}`
    }&${profileInfo.bio && `bio=${profileInfo.bio}`}&${
      profileInfo.color && `color=${profileInfo.color.replace("#", "")}`
    }`;

    const linkParams = links.map(link => `${link.platform}=${link.link}`);
    const finalUrl = `${url}&${linkParams.join("&")}`;

    setTimeout(() => {
      setModal(true);
    }, 500);

    const hasShortened = localStorage.getItem("shortened");

    if (hasShortened) {
      setShowFullURL(true);
    } else {
      shortenUrl(finalUrl)
        .then(res => {
          localStorage.setItem("shortened", "true");
          setShortUrl(res);
        })
        .catch(() => {
          setShowFullURL(true);
        });
    }
  };

  const copyUrl = (url: string) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      })
      .catch(() => {
        alert("Could not copy URL");
      });
  };

  return (
    <PreviewModal
      style={{ transform: preview ? "translateX(0)" : "translateX(100%)" }}
    >
      <div className='banner' style={{ background: profileInfo.color }} />
      <div className='card'>
        <Builder />
        <div className='buttons'>
          <Button
            type='outline'
            onClick={() => {
              setPreview && setPreview(false);
            }}
          >
            <Icon icon='mdi:pencil' />
            Edit
          </Button>
          <Button type='filled' onClick={generateShortUrl}>
            <Icon icon='mdi:share' />
            Share
          </Button>
        </div>
      </div>
      <Modal onClose={() => setModal(false)} visible={modal}>
        {loading ? (
          <Spinner />
        ) : !loading && !showFullURL ? (
          <div>
            <h3>Your short URL is:</h3>

            <p className='url' onClick={() => copyUrl(shortUrl)}>
              <Icon icon={!copied ? "mdi:content-copy" : "mdi:check"} />
              {shortUrl}
            </p>
            <p>Copy & share it with the world!</p>
          </div>
        ) : (
          <div>
            <h3>You already shortened a URL</h3>
            <p style={{ margin: ".7rem 0" }}>
              This is a portfolio project so shortenings are restricted
            </p>
            <p>Click on the button to copy your full URL</p>
            <p className='url' onClick={() => copyUrl(window.location.href)}>
              <Icon icon={!copied ? "mdi:content-copy" : "mdi:check"} />
              Your long URL
            </p>
          </div>
        )}
      </Modal>
    </PreviewModal>
  );
};

export default Preview;
