import { z } from "zod";
import costBenefitImage from "@/assets/projects/cost-benefit-tableau.png";
import financialImage from "@/assets/projects/financial-powerbi.png";
import partyImage from "@/assets/projects/party-analytica.png";
import { parseContent, projectSchema } from "@/lib/schema";

// TODO(Ahadi): add links.code / links.live for any project that has a public
// repo, Tableau Public or Power BI share link. Empty links hide their buttons.
export const projects = parseContent(
  z.array(projectSchema),
  [
    {
      slug: "cost-benefit-dashboard",
      title: "Cost Benefit Analysis Dashboard",
      highlight: "Benefit",
      tool: "Tableau",
      summary:
        "A Tableau dashboard analysing cost and profit performance across products and states, pairing a profit-vs-sales trendline with budget-vs-actual margin tracking over time.",
      image: costBenefitImage,
      imageAlt:
        "Tableau dashboard with a KPI strip, profit-vs-sales scatter, margin trend, marketing cost by product and a US state profit map",
      stats: ["5 linked views", "~10% profit conversion"],
      links: {},
      caseStudy: {
        context:
          "A solo Tableau assignment with a defined brief: build a Cost Benefit Analysis Dashboard from a course-provided sales and cost dataset.",
        problem:
          "Turn transaction-level sales and cost data into a view that shows whether the business is profitable, where, on what, and whether it is hitting its budget.",
        data: "A course-provided US sales dataset with Area Code, State, Market, Market Size, Profit, Margin, Sales, COGS, Total Expenses, Marketing and Inventory, plus budgeted counterparts for profit, COGS, margin and sales.",
        approach: [
          "KPI strip: Total Sales, Profit, Revenue, COGS, Expenses and Average Marketing Cost.",
          "Profit-vs-Sales scatter chart with a trendline.",
          "Dual-axis line chart of Budgeted vs Actual Margin by month.",
          "Dual-axis column-and-line chart of Marketing Cost and Sales per product.",
          "State-level map of profit.",
        ],
        insights: [
          "Revenue of 8,298 turns into profit of 799: roughly 10% of revenue survives COGS and expenses.",
          "The profit-vs-sales trendline is flat to slightly negative, so more sales did not reliably mean more profit.",
          "Marketing spend and sales don't move together by product: Caffe Mocha is high on both, Columbian leads sales on mid-level spend, and Chamomile is low on both.",
          "Profit is heavily concentrated by state, with California leading.",
        ],
        implication:
          "“Grow sales” isn't automatically a profit strategy. A business needs product- and state-level views, not one total, before deciding where marketing money should go.",
        limitations:
          "Course-provided dataset, not verified real sales data. The Budgeted vs Actual Margin view should be rechecked in Tableau before relying on it.",
      },
    },
    {
      slug: "financial-market-dashboard",
      title: "Financial Market Performance Dashboard",
      highlight: "Market",
      tool: "Power BI",
      summary:
        "A one-page Power BI dashboard that tracks profitability, liquidity and valuation across eight companies at once, with slicers, gauges, KPIs against goals and trend charts on a single screen.",
      image: financialImage,
      imageAlt:
        "Power BI dashboard with slicers, profit margin and EPS gauges, KPI cards against goals, cash-flow lines, equity bars and a market cap and revenue combo chart",
      stats: ["16 visuals", "8 companies", "2005–2025"],
      links: {},
      caseStudy: {
        context:
          "A solo Power BI assignment: turn course-provided financial-statement data into a decision-ready, single-page dashboard.",
        problem:
          "Two decades of multi-company financial data isn't usable at a glance. The goal was something a decision-maker could scan in seconds: how profitable are these companies, are they hitting liquidity and cash-flow targets, and how does their market value compare over time?",
        data: "Per-company, per-year financial statements (e.g. AAPL, AIG, AMZN, BCS, GOOG, INTC, MCD, MSFT) covering EPS, margins, ROA/ROE/ROI, cash flows, free cash flow per share, current ratio, debt/equity, equity, market cap and revenue.",
        approach: [
          "Category, Company and Year slicers, with Year as a range slider.",
          "EPS and Profit Margin gauges showing average, min, max and a target marker.",
          "Summary cards for ROA, ROE, ROI, Gross Profit and Net Income.",
          "Three KPI visuals showing % variance against goal: Free Cash Flow per Share, Debt/Equity and Current Ratio.",
          "Cash-flow trend lines, an employee donut, a shareholder-equity bar chart and a market-cap + revenue combo chart.",
          "Chose the right aggregation for every metric: averages for ratios, sums for scale metrics.",
        ],
        insights: [
          "Average profit margin is 13.68% but ranges from −44.70 to 36.69, so profitability is uneven.",
          "Free Cash Flow per Share (−0.76 vs a 0.20 goal) and Debt/Equity (−0.30 vs 2.00) miss their targets by a wide margin; Current Ratio is closer at 1.13 vs 1.50.",
          "Google and Microsoft lead shareholder equity by a clear margin.",
          "Market cap keeps climbing while revenue peaks around 2020–21 and then drops sharply.",
        ],
        implication:
          "The dashboard flags where reality has drifted from target and where a trend has changed direction, instead of only reporting numbers.",
        limitations:
          "Course dataset that appears synthetic or scaled (e.g. employee counts), so the figures demonstrate dashboard and metric design, not real claims about these companies.",
      },
    },
    {
      slug: "party-location-decision-model",
      title: "Party Location Decision Model",
      highlight: "Decision",
      tool: "Analytica",
      summary:
        "A decision model that weighs three party locations against uncertain weather, then sweeps the probability of sunshine from 0% to 100% to find where the best choice actually flips.",
      image: partyImage,
      imageAlt:
        "Analytica influence diagram linking Party Location, Weather, Sunshine and Utility nodes, with a mean value chart",
      stats: ["3 options", "0–100% sweep", "≈87.5% threshold"],
      links: {},
      caseStudy: {
        context:
          "A solo Analytica assignment on decision modelling under uncertainty, using decision, chance and objective nodes.",
        problem:
          "Choose between Outdoors, Porch and Indoors when the outcome depends on weather nobody controls. The real question isn't the best guess for the weather, but whether the best choice changes with confidence in the forecast.",
        data: "Self-defined dollar utilities for each location and weather outcome (see the payoff table). These are assignment numbers, not real business figures.",
        approach: [
          "Decision node (Party Location), chance node (Weather) and objective node (Utility) linked through a deterministic payoff table.",
          "Added a Sunshine node defined as Sequence(0, 1, 0.1) and drove Weather's probability from it.",
          "Evaluated mean utility for every location at each probability level from 0% to 100%: a full sensitivity sweep instead of one guess.",
        ],
        insights: [
          "Indoors never wins: the “safe” option is dominated by Porch at every probability.",
          "Porch is the best choice whenever the chance of sunshine is below about 87.5%.",
          "Outdoors only wins above that threshold, because its rainy-day downside (−$20) drags the expected value down.",
        ],
        implication:
          "Sensitivity analysis shows a decision-maker the exact point where an assumption would have to change before the decision should change: the obviously safe option isn't automatically the right one.",
        limitations:
          "Self-defined utilities, only two weather states and no real-world weather or business data.",
      },
      payoffs: [
        { option: "Outdoors", sunny: 100, rainy: -20 },
        { option: "Porch", sunny: 90, rainy: 50 },
        { option: "Indoors", sunny: 40, rainy: 40 },
      ],
    },
  ],
  "projects",
);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
