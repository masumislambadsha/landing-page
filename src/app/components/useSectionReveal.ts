"use client";

import { RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useSectionReveal(sectionRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const heading = section.querySelectorAll('[data-gsap="heading"]');
      const copy = section.querySelectorAll('[data-gsap="copy"]');
      const items = section.querySelectorAll('[data-gsap="item"]');

      if (heading.length > 0) {
        gsap.set(heading, { autoAlpha: 0, y: 36 });
      }

      if (copy.length > 0) {
        gsap.set(copy, { autoAlpha: 0, y: 24 });
      }

      if (items.length > 0) {
        gsap.set(items, { autoAlpha: 0, y: 32, scale: 0.96 });
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      if (heading.length > 0) {
        timeline.to(heading, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
        });
      }

      if (copy.length > 0) {
        timeline.to(
          copy,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
          },
          heading.length > 0 ? "-=0.45" : 0,
        );
      }

      if (items.length > 0) {
        timeline.to(
          items,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.12,
          },
          heading.length > 0 || copy.length > 0 ? "-=0.35" : 0,
        );
      }
    }, section);

    return () => ctx.revert();
  }, [sectionRef]);
}
