"use client";

import { ExternalLink, Link2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export interface TaskLink {
  text: string;
  url: string;
}

export interface Task {
  label: string;
  links?: TaskLink[];
}

// ─── Link Preview Modal (Portal) ─────────────────────────────────────────────
interface LinkPreviewModalProps {
  link: TaskLink | null;
  onClose: () => void;
}

function LinkPreviewModal({ link, onClose }: LinkPreviewModalProps) {
  const [mounted, setMounted] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeBlocked, setIframeBlocked] = useState(false);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // 클라이언트에서만 Portal 타겟 설정 (SSR 안전)
  useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  // 슬라이드업 애니메이션 트리거
  useEffect(() => {
    if (link) {
      setIframeLoaded(false);
      setIframeBlocked(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setMounted(true));
      });
    } else {
      setMounted(false);
    }
  }, [link]);

  // ESC 키 닫기
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // body 스크롤 잠금
  useEffect(() => {
    if (link) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [link]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  // link가 없거나 portalTarget이 없으면 렌더링하지 않음
  if (!link || !portalTarget) return null;

  const modalContent = (
    // 오버레이: position fixed + inset 0 → 뷰포트 전체를 덮음
    // Portal로 document.body에 마운트되므로 부모의 transform/overflow/z-index 영향 없음
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background: mounted ? "rgba(15, 23, 42, 0.6)" : "rgba(15, 23, 42, 0)",
        backdropFilter: mounted ? "blur(6px)" : "blur(0px)",
        WebkitBackdropFilter: mounted ? "blur(6px)" : "blur(0px)",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      {/* 모달 카드 */}
      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          height: "85vh",
          background: "#ffffff",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.12)",
          transform: mounted
            ? "translateY(0) scale(1)"
            : "translateY(32px) scale(0.98)",
          opacity: mounted ? 1 : 0,
          transition:
            "transform 0.4s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.3s ease",
        }}
      >
        {/* 헤더 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 16px",
            borderBottom: "1px solid #f1f5f9",
            flexShrink: 0,
            gap: 12,
            background: "#fafafa",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              minWidth: 0,
              flex: 1,
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: "oklch(0.94 0.04 264)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Link2 size={14} color="oklch(0.45 0.22 264)" />
            </div>
            <div style={{ minWidth: 0 }}>
              <p
                style={{
                  fontSize: "0.83rem",
                  fontWeight: 700,
                  color: "#1e293b",
                  margin: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {link.text}
              </p>
              <p
                style={{
                  fontSize: "0.67rem",
                  color: "#94a3b8",
                  fontFamily: "monospace",
                  margin: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {link.url}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexShrink: 0,
            }}
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                fontSize: "0.75rem",
                color: "oklch(0.45 0.22 264)",
                fontWeight: 600,
                textDecoration: "none",
                padding: "5px 12px",
                borderRadius: 8,
                background: "oklch(0.94 0.04 264)",
              }}
            >
              <ExternalLink size={12} />새 탭
            </a>
            <button
              onClick={onClose}
              aria-label="닫기"
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                border: "none",
                background: "#f1f5f9",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#64748b",
                flexShrink: 0,
              }}
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* iframe 영역 */}
        <div
          style={{
            flex: 1,
            position: "relative",
            background: "#f8fafc",
            overflow: "hidden",
          }}
        >
          {/* 로딩 스피너 */}
          {!iframeLoaded && !iframeBlocked && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                zIndex: 1,
              }}
            >
              <style>{`
                @keyframes __modal_spin {
                  to { transform: rotate(360deg); }
                }
              `}</style>
              <div
                style={{
                  width: 38,
                  height: 38,
                  border: "3px solid #e2e8f0",
                  borderTop: "3px solid oklch(0.52 0.22 264)",
                  borderRadius: "50%",
                  animation: "__modal_spin 0.8s linear infinite",
                }}
              />
              <p style={{ fontSize: "0.8rem", color: "#94a3b8", margin: 0 }}>
                페이지 불러오는 중...
              </p>
            </div>
          )}

          {/* iframe 차단 fallback */}
          {iframeBlocked && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                padding: 32,
                textAlign: "center",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "oklch(0.94 0.04 264)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ExternalLink size={22} color="oklch(0.45 0.22 264)" />
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: "#1e293b",
                    marginBottom: 6,
                    fontSize: "0.9rem",
                  }}
                >
                  이 페이지는 미리보기를 허용하지 않습니다
                </p>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "#64748b",
                    marginBottom: 16,
                  }}
                >
                  X-Frame-Options 또는 CSP 정책으로 인해 인라인 표시가
                  불가합니다.
                </p>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "9px 18px",
                    borderRadius: 10,
                    background: "oklch(0.52 0.22 264)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "0.83rem",
                    textDecoration: "none",
                  }}
                >
                  <ExternalLink size={13} />새 탭에서 열기
                </a>
              </div>
            </div>
          )}

          <iframe
            key={link.url}
            src={link.url}
            title={link.text}
            onLoad={() => setIframeLoaded(true)}
            onError={() => setIframeBlocked(true)}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              display: "block",
              opacity: iframeLoaded && !iframeBlocked ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </div>
    </div>
  );

  // createPortal로 document.body에 직접 렌더링
  // → 부모의 transform / overflow / z-index stacking context 영향을 완전히 차단
  return createPortal(modalContent, portalTarget);
}

// ─── Task List ────────────────────────────────────────────────────────────────
interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  const [activeLink, setActiveLink] = useState<TaskLink | null>(null);

  return (
    <>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {tasks.map((task, ti) => (
          <li key={ti}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                fontSize: "0.875rem",
                color: "#334155",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "oklch(0.75 0.10 264)",
                  flexShrink: 0,
                  marginTop: 7,
                }}
              />
              <span style={{ flex: 1, lineHeight: 1.6 }}>{task.label}</span>
            </div>

            {task.links && task.links.length > 0 && (
              <div
                style={{
                  marginLeft: 16,
                  marginTop: 4,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                }}
              >
                {task.links.map((link, li) => (
                  <button
                    key={li}
                    onClick={() => setActiveLink(link)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      padding: "3px 10px 3px 7px",
                      borderRadius: 999,
                      border: "1px solid oklch(0.82 0.08 264)",
                      background: "oklch(0.96 0.02 264)",
                      color: "oklch(0.45 0.20 264)",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "background 0.15s, transform 0.15s",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.background = "oklch(0.92 0.05 264)";
                      el.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.background = "oklch(0.96 0.02 264)";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    <Link2 size={10} />
                    {link.text}
                  </button>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      <LinkPreviewModal link={activeLink} onClose={() => setActiveLink(null)} />
    </>
  );
}
