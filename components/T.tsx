"use client";

import { useEffect, useState } from "react";

type Languages = "fr" | "en";

interface TProps {
	id: string; // Allow any string, not just predefined keys
	ns?: string;
	defaultValue?: string;
}

const T: React.FC<TProps> = ({ id, ns, defaultValue }) => {
	const [lang, setLang] = useState<Languages>("fr");
	const [message, setMessage] = useState<string>(defaultValue || id);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const storedLang = (localStorage.getItem("lang") as Languages) || 
		                   (document.documentElement.lang as Languages) || 
		                   "fr";
		setLang(storedLang);

		if (storedLang === "en") {
			import("@/lang/en").then((mod) => {
				const msg = (mod.default as Record<string, string>)[id];
				setMessage(msg || defaultValue || id);
			});
		} else {
			import("@/lang/fr").then((mod) => {
				const msg = (mod.default as Record<string, string>)[id];
				setMessage(msg || defaultValue || id);
			});
		}

		setMounted(true);
	}, [id, defaultValue]);

	// Subscribe to language changes
	useEffect(() => {
		const handleStorageChange = (e: StorageEvent) => {
			if (e.key === "lang") {
				const newLang = (e.newValue as Languages) || "fr";
				setLang(newLang);
				
				if (newLang === "en") {
					import("@/lang/en").then((mod) => {
						const msg = (mod.default as Record<string, string>)[id];
						setMessage(msg || defaultValue || id);
					});
				} else {
					import("@/lang/fr").then((mod) => {
						const msg = (mod.default as Record<string, string>)[id];
						setMessage(msg || defaultValue || id);
					});
				}
			}
		};

		window.addEventListener("storage", handleStorageChange);
		return () => window.removeEventListener("storage", handleStorageChange);
	}, [id, defaultValue]);

	if (!mounted) return null;

	return <span>{message}</span>;
};

export default T;
