import { useEffect, useState } from "react";

type Languages = "fr" | "en";

export function useTranslation() {
	const [lang, setLang] = useState<Languages>("fr");
	const [messages, setMessages] = useState<Record<string, string> | null>(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const storedLang = (localStorage.getItem("lang") as Languages) || "fr";
		setLang(storedLang);

		if (storedLang === "en") {
			import("@/lang/en").then((mod) => setMessages(mod.default));
		} else {
			import("@/lang/fr").then((mod) => setMessages(mod.default));
		}

		setMounted(true);
	}, []);

	// Subscribe to language changes
	useEffect(() => {
		const handleStorageChange = (e: StorageEvent) => {
			if (e.key === "lang") {
				const newLang = (e.newValue as Languages) || "fr";
				setLang(newLang);

				if (newLang === "en") {
					import("@/lang/en").then((mod) => setMessages(mod.default));
				} else {
					import("@/lang/fr").then((mod) => setMessages(mod.default));
				}
			}
		};

		window.addEventListener("storage", handleStorageChange);
		return () => window.removeEventListener("storage", handleStorageChange);
	}, []);

	const t = (key: string): string => {
		if (!messages) return key;
		return messages[key] || key;
	};

	return { lang, t, mounted };
}
