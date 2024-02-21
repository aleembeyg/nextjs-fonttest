"use client"
import { Box, Grid, ClickAwayListener, List, ListItem, } from '@mui/material'
import { useEffect, useState } from "react";
import OptimizeImage from "@/components/optimizeImage";
import { signOut, useSession } from "next-auth/react";
import styles from "./index.module.scss";
import { IoMdArrowDropdown, IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [showDesktopSub, setShowDesktopSub] = useState(false);
    const [showPlansSub, setShowPlansSub] = useState(false);
    const [showRatesSub, setShowRatesSub] = useState(false);
    useEffect(() => {
        const handleRouteChangeComplete = (url: any) => {
          setShowDesktopSub(false);
          setShowPlansSub(false);
          setShowRatesSub(false);
        };
      }, [router]);
  return (
    <>
        <Box className={styles.headerOuter}>
            <Box>
                <Link href="/">
                    <OptimizeImage className={styles.headerLogo} alt='img' src={"/assets/images/talk-home-logo.png"} />
                </Link>
            </Box>
            <Box>
                <Box className={styles.linkPanel}>
                    <ClickAwayListener onClickAway={() => setShowDesktopSub(false)}>
                            <label onClick={() => setShowDesktopSub(!showDesktopSub)}>
                            Why Talk Home <IoMdArrowDropdown />
                            {showDesktopSub && (
                                <div className={styles.subLinksPanel}>
                                <List>
                                    <ListItem>
                                    <Link
                                        href="/why-thm"
                                    >
                                        Why THM
                                    </Link>
                                    </ListItem>
                                    <ListItem>
                                    <Link
                                        href="/5g">
                                        Talk Home 5G
                                    </Link>
                                    </ListItem>
                                    <ListItem>
                                    <Link
                                        href="/transfer-mobile-number">
                                        Port In
                                    </Link>
                                    </ListItem>
                                    <ListItem>
                                    <Link
                                        href="/about">
                                        About Us
                                    </Link>
                                    </ListItem>
                                    <ListItem>
                                    <Link
                                        href="https://blog.talkhome.co.uk/" target="_blank">
                                        Blog
                                    </Link>
                                    </ListItem>
                                    
                                </List>
                                </div>
                            )}
                            </label>
                        </ClickAwayListener>
                        <ClickAwayListener onClickAway={() => setShowPlansSub(false)}>
                            <label onClick={() => setShowPlansSub(!showPlansSub)}>
                            Plans <IoMdArrowDropdown />
                            {showPlansSub && (
                                <div className={styles.subLinksPanel}>
                                <List>
                                    <ListItem>
                                    <Link
                                        href="/sim-only-deals/monthly"
                                    >
                                    Monthly Rolling
                                    </Link>
                                    </ListItem>
                                    <ListItem>
                                    <Link
                                        href="/sim-only-deals/12-month-plan">
                                        12-months Plan
                                    </Link>
                                    </ListItem>
                                    <ListItem>
                                    <Link
                                        href="/sim-only-deals/payg">
                                        PAYG Plans
                                    </Link>
                                    </ListItem>
                                    <ListItem>
                                    <Link
                                        href="/sim-only-deals/international">
                                        International Plans
                                    </Link>
                                    </ListItem>
                                    <ListItem>
                                    <Link
                                        href="/sim-only-deals/data">
                                        Data Bolt-ons
                                    </Link>
                                    </ListItem>
                                    
                                </List>
                                </div>
                            )}
                            </label>
                        </ClickAwayListener>
                        <ClickAwayListener onClickAway={() => setShowRatesSub(false)}>
                            <label onClick={() => setShowRatesSub(!showRatesSub)}>
                            rates <IoMdArrowDropdown />
                            {showRatesSub && (
                                <div className={styles.subLinksPanel}>
                                <List>
                                    <ListItem>
                                    <Link
                                        href="/why-thm"
                                    >
                                    UK Rates
                                    </Link>
                                    </ListItem>
                                    <ListItem>
                                    <Link
                                        href="/5g">
                                        International Rates
                                    </Link>
                                    </ListItem>
                                    <ListItem>
                                    <Link
                                        href="/transfer-mobile-number">
                                        Roaming Rates 
                                    </Link>
                                    </ListItem>
                                    
                                </List>
                                </div>
                            )}
                            </label>
                        </ClickAwayListener>
                        <Link href="/">Help</Link>
                    </Box>
                </Box>
                <Box className={styles.rightCol}>
                    {status === "unauthenticated" && (
                    <Link href="/dashboard/login">Login</Link>
                    )}
                    {status === "authenticated" && (
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                        signOut({ callbackUrl: "/dashboard/login" });
                        }}
                    >
                        logout
                    </span>
                    )}            
                </Box>
            
        </Box>
    </>
  )
}
