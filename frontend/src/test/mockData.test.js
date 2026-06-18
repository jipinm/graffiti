import { describe, it, expect } from "vitest";
import {
  BRAND_NAME,
  BRAND_CITY,
  BRANDS,
  MODELS_BY_BRAND,
  STORAGE_OPTIONS,
  RAM_OPTIONS,
  QUESTIONNAIRE_STEPS,
  MARKETPLACE,
  SELLER_LISTINGS,
  STORES,
  FAQS,
  TESTIMONIALS,
  PLATFORM_STATS,
  HOW_IT_WORKS,
  formatINR,
} from "@/lib/mockData";

describe("mockData — brand & city", () => {
  it("uses GRAFFITI as the brand and Kochi as the base city", () => {
    expect(BRAND_NAME).toBe("GRAFFITI");
    expect(BRAND_CITY).toMatch(/Kochi/);
  });
});

describe("mockData — catalog integrity", () => {
  it("matches the snapshot for brand IDs and structure", () => {
    const ids = BRANDS.map((b) => b.id);
    expect(ids).toMatchInlineSnapshot(`
      [
        "apple",
        "samsung",
        "oneplus",
        "xiaomi",
        "google",
        "sony",
      ]
    `);
    BRANDS.forEach((b) => {
      expect(b).toHaveProperty("id");
      expect(b).toHaveProperty("name");
      expect(b).toHaveProperty("Icon");
    });
  });

  it("has a non-empty model list for every brand", () => {
    BRANDS.forEach((b) => {
      const models = MODELS_BY_BRAND[b.id];
      expect(Array.isArray(models), `${b.id} should have a model array`).toBe(true);
      expect(models.length).toBeGreaterThan(0);
      models.forEach((m) => {
        expect(m).toMatchObject({
          id: expect.any(String),
          name: expect.any(String),
          image: expect.any(String),
          baseEstimate: expect.any(Number),
        });
        expect(m.baseEstimate).toBeGreaterThan(0);
      });
    });
  });

  it("matches the snapshot for storage and RAM facets", () => {
    expect(STORAGE_OPTIONS).toMatchInlineSnapshot(`
      [
        "128 GB",
        "256 GB",
        "512 GB",
        "1 TB",
      ]
    `);
    expect(RAM_OPTIONS).toMatchInlineSnapshot(`
      [
        "4 GB",
        "6 GB",
        "8 GB",
        "12 GB",
        "16 GB",
      ]
    `);
  });
});

describe("mockData — questionnaire", () => {
  it("contains exactly four steps in the expected order", () => {
    const ids = QUESTIONNAIRE_STEPS.map((s) => s.id);
    expect(ids).toEqual(["functionality", "screen-body", "components", "accessories"]);
  });

  it("every question carries an icon name and stable id", () => {
    QUESTIONNAIRE_STEPS.forEach((s) => {
      expect(s.questions.length).toBeGreaterThan(0);
      s.questions.forEach((q) => {
        expect(q.id).toMatch(/^[a-zA-Z]+$/);
        expect(q.icon, `Question ${q.id} must have an icon`).toBeTypeOf("string");
        expect(q.impact).toBeTypeOf("number");
      });
    });
  });

  it("uses 'selectall' only for the components step", () => {
    const selectAllSteps = QUESTIONNAIRE_STEPS.filter((s) => s.type === "selectall").map((s) => s.id);
    expect(selectAllSteps).toEqual(["components"]);
  });
});

describe("mockData — marketplace", () => {
  it("every product has the fields the Buy filters depend on", () => {
    expect(MARKETPLACE.length).toBeGreaterThanOrEqual(8);
    MARKETPLACE.forEach((p) => {
      expect(p).toMatchObject({
        id: expect.any(String),
        model: expect.any(String),
        brand: expect.any(String),
        storage: expect.stringMatching(/GB|TB$/),
        ram: expect.stringMatching(/GB$/),
        price: expect.any(Number),
        mrp: expect.any(Number),
        grade: expect.stringMatching(/^(Like New|Superb|Good)$/),
        store: expect.stringMatching(/Kochi/),
        warranty: expect.stringMatching(/months?$/),
        rating: expect.any(Number),
      });
      expect(p.price).toBeLessThanOrEqual(p.mrp);
      expect(p.rating).toBeGreaterThan(0);
      expect(p.rating).toBeLessThanOrEqual(5);
    });
  });

  it("every product picks up at a Kochi store (locator integrity)", () => {
    const storeAreas = STORES.map((s) => s.area.split(" ")[0]);
    MARKETPLACE.forEach((p) => {
      const matchesAStore = storeAreas.some((area) => p.store.includes(area)) || p.store.includes("Fort Kochi");
      expect(matchesAStore, `${p.id} → ${p.store} not mapped to a known Kochi store`).toBe(true);
    });
  });
});

describe("mockData — stores", () => {
  it("has 6 Kochi locations with phone + hours", () => {
    expect(STORES.length).toBe(6);
    STORES.forEach((s) => {
      expect(s.city).toBe("Kochi");
      expect(s.phone).toMatch(/^\+91/);
      expect(s.hours).toMatch(/AM|PM/);
    });
  });
});

describe("mockData — supporting content", () => {
  it("FAQs each have a question and answer", () => {
    expect(FAQS.length).toBeGreaterThanOrEqual(5);
    FAQS.forEach((f) => {
      expect(f.q.length).toBeGreaterThan(8);
      expect(f.a.length).toBeGreaterThan(20);
    });
  });

  it("Testimonials each have a quote and Kochi-rooted role", () => {
    expect(TESTIMONIALS.length).toBeGreaterThanOrEqual(3);
    TESTIMONIALS.forEach((t) => {
      expect(t.quote.length).toBeGreaterThan(20);
      expect(t.role).toMatch(/Kochi|Edappally|Kakkanad/i);
    });
  });

  it("Platform stats expose a numeric value + label", () => {
    PLATFORM_STATS.forEach((s) => {
      expect(typeof s.value).toBe("number");
      expect(s.label).toBeTruthy();
    });
  });

  it("How-it-works has seven steps in 01..07 order", () => {
    expect(HOW_IT_WORKS.map((s) => s.n)).toEqual([
      "01", "02", "03", "04", "05", "06", "07",
    ]);
  });

  it("Seller listings carry the dashboard fields", () => {
    SELLER_LISTINGS.forEach((l) => {
      expect(l).toMatchObject({
        id: expect.stringMatching(/^G-/),
        status: expect.stringMatching(/Listed|Sold|Under Inspection/),
      });
    });
  });
});

describe("mockData — formatINR", () => {
  it("formats numbers with Indian grouping and a ₹ prefix", () => {
    expect(formatINR(0)).toBe("₹0");
    expect(formatINR(1500)).toBe("₹1,500");
    expect(formatINR(125000)).toBe("₹1,25,000");
    expect(formatINR(null)).toBe("₹0");
    expect(formatINR(undefined)).toBe("₹0");
  });
});
