import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";

const ASCII_LOGO = `
  ____  ____
 |  _ \\| __ )
 | |_) |  _ \\
 |  _ <| |_) |
 |_| \\_\\____/
`;

const commands = {
  help: () => [
    "Available commands:",
    "",
    "  whoami      - Designer profile",
    "  services    - What I help with",
    "  results     - Problems I solve",
    "  projects    - Business-facing work",
    "  contact     - Start a conversation",
    "  clear       - Clear terminal",
    "  secret      - Hidden note",
    "  matrix      - Visual easter egg",
  ],
  whoami: () => [
    "Ramy Bezriche",
    "------------------------------",
    "UX/UI designer and frontend partner",
    "based in Algiers, Algeria.",
    "",
    "I help businesses simplify their message,",
    "reduce friction, and ship cleaner digital experiences.",
  ],
  services: () => [
    "How I help",
    "------------------------------",
    "Website redesigns for service businesses",
    "Landing pages with stronger clarity and trust",
    "Dashboard and booking flow UX improvements",
    "UI systems that are consistent and easier to scale",
  ],
  results: () => [
    "Problems I solve",
    "------------------------------",
    "Visitors do not understand the offer fast enough",
    "The interface looks dated or hard to trust",
    "Mobile layouts feel weak or lose conversions",
    "The team needs design quality plus implementation",
  ],
  projects: () => [
    "Business-focused projects",
    "------------------------------",
    "01 -> VAMOS         Travel agency booking experience",
    "02 -> Mehdi Doctor  Clinic workflow and appointment UX",
    "03 -> EcoWebDZ      Conversion-focused business landing pages",
    "04 -> Tawba         Content-rich product experience and theming",
  ],
  contact: () => [
    "Start a project",
    "------------------------------",
    "Email    -> ramybezriche@gmail.com",
    "LinkedIn -> linkedin.com/in/ramy-bezriche",
    "Phone    -> +213 552 173 451",
    "",
    "Or scroll down to the contact section.",
  ],
  neofetch: () => [
    ...ASCII_LOGO.trim().split("\n"),
    "  ramy@portfolio",
    "  -----------------",
    "  Focus   -> UX/UI for businesses",
    "  Build   -> React, Next.js, Tailwind",
    "  Style   -> Clear, modern, conversion aware",
    "  Value   -> Design plus implementation",
  ],
  secret: () => [
    "+--------------------------------+",
    "| Great interfaces do one thing: |",
    "| they make the next step feel   |",
    "| obvious.                       |",
    "+--------------------------------+",
  ],
  clear: () => [],
  matrix: () => {
    window.dispatchEvent(new CustomEvent("activate-matrix"));
    return ["Entering the matrix...", "Wake up, Neo..."];
  },
};

const INITIAL_LINES = [
  { type: "system", text: "Welcome to ramy@portfolio - Type 'help' to explore." },
  { type: "system", text: "" },
];

const HeroTerminal = () => {
  const [history, setHistory] = useState(INITIAL_LINES);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    gsap.fromTo(
      containerRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 3 }
    );
  }, []);

  const executeCommand = useCallback((command) => {
    const trimmed = command.trim().toLowerCase();
    const newLines = [{ type: "input", text: command }];

    if (trimmed === "clear") {
      setHistory(INITIAL_LINES);
      return;
    }

    if (!trimmed) {
      setHistory((prev) => [...prev, ...newLines]);
      return;
    }

    const baseCommand = trimmed.split(" ")[0];
    const handler = commands[baseCommand];

    if (handler) {
      handler().forEach((line) => {
        newLines.push({ type: "output", text: line });
      });
    } else {
      newLines.push({
        type: "error",
        text: `command not found: ${trimmed}. Type 'help' for available commands.`,
      });
    }

    newLines.push({ type: "output", text: "" });
    setHistory((prev) => [...prev, ...newLines]);
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (input.trim()) {
        setCmdHistory((prev) => [input, ...prev]);
      }
      executeCommand(input);
      setInput("");
      setHistoryIndex(-1);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (historyIndex < cmdHistory.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInput(cmdHistory[nextIndex]);
      }
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(cmdHistory[nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
      return;
    }

    if (event.key === "Tab") {
      event.preventDefault();
      const partial = input.trim().toLowerCase();
      if (!partial) {
        return;
      }

      const match = Object.keys(commands).find((command) => command.startsWith(partial));
      if (match) {
        setInput(match);
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    const element = terminalRef.current;
    if (!element) {
      return undefined;
    }

    const handleWheel = (event) => {
      const { scrollTop, scrollHeight, clientHeight } = element;
      const atTop = scrollTop === 0 && event.deltaY < 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1 && event.deltaY > 0;

      if (!atTop && !atBottom) {
        event.stopPropagation();
      }
    };

    element.addEventListener("wheel", handleWheel, { passive: false });
    return () => element.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-md opacity-0"
      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
    >
      <div className="accent-glow-shell overflow-hidden border border-border-medium bg-bg-elevated">
        <div className="flex items-center gap-2 border-b border-border-subtle bg-bg-surface px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="ml-2 text-[10px] tracking-wide text-text-tertiary">
            ramy@portfolio:client-proof
          </span>
        </div>

        <div
          ref={terminalRef}
          onClick={focusInput}
          data-lenis-prevent
          className="h-[280px] select-text overflow-y-auto p-4 text-[12px] leading-[1.7] md:h-[320px]"
          style={{ cursor: "text", overscrollBehavior: "contain" }}
        >
          {history.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap break-all">
              {line.type === "input" ? (
                <span>
                  <span className="text-accent">&gt;</span>{" "}
                  <span className="text-text-primary">{line.text}</span>
                </span>
              ) : line.type === "error" ? (
                <span className="text-[#ff5f57]">{line.text}</span>
              ) : line.type === "system" ? (
                <span className="text-text-tertiary">{line.text}</span>
              ) : (
                <span className="text-text-secondary">{line.text}</span>
              )}
            </div>
          ))}

          <div className="flex items-center">
            <span className="shrink-0 text-accent">&gt;</span>
            <span className="ml-1.5 text-text-primary">{input}</span>
            <span className="terminal-input-signal ml-2" aria-hidden="true" />
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              className="absolute h-0 w-0 opacity-0"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-[10px] tracking-wider text-text-tertiary">
        Try: help, whoami, services, results
      </p>
    </div>
  );
};

export default HeroTerminal;
