import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link } from "@mui/material";
import './styles/Social.css';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
    return (
        <><Container>
            <Grid container xs={12} className="footer">
                <Link href="https://www.youtube.com"
                    className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </Link>
                <Link href="https://www.facebook.com"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </Link>
                <Link href="https://www.twitter.com" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </Link>
                <Link href="https://www.instagram.com"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </Link>
            </Grid>
        </Container>
        </>

    );
}