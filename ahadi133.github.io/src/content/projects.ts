import { z } from "zod";
import cloudlyCampaignDashboardImage from "@/assets/projects/cloudly-campaign-dashboard.png";
import cloudlyContentPlanImage from "@/assets/projects/cloudly-content-plan-workbook.png";
import cloudlyOutreachRedesignImage from "@/assets/projects/cloudly-outreach-redesign.png";
import cloudlyProspectSegmentationImage from "@/assets/projects/cloudly-prospect-segmentation.png";
import cloudlyWebsiteContentImage from "@/assets/projects/cloudly-website-content-strategy.png";
import codevedaChurnRiskImage from "@/assets/projects/codeveda-churn-risk.png";
import codevedaChurnSqlImage from "@/assets/projects/codeveda-churn-sql.png";
import codevedaChurnStatisticsImage from "@/assets/projects/codeveda-churn-statistics.png";
import codevedaDataCleaningImage from "@/assets/projects/codeveda-data-cleaning.png";
import codevedaIrisImage from "@/assets/projects/codeveda-iris-exploration.png";
import codevedaPredictiveImage from "@/assets/projects/codeveda-predictive-modeling.png";
import codevedaRetentionImage from "@/assets/projects/codeveda-retention-strategy.png";
import codevedaSentimentImage from "@/assets/projects/codeveda-sentiment-dashboard.png";
import costBenefitImage from "@/assets/projects/cost-benefit-tableau.png";
import dataAnalysisImage from "@/assets/projects/data-analysis-exercises.png";
import excelModelsImage from "@/assets/projects/excel-business-models.png";
import excelSalesImage from "@/assets/projects/excel-sales.png";
import financialImage from "@/assets/projects/financial-powerbi.png";
import partyImage from "@/assets/projects/party-analytica.png";
import worldGdpImage from "@/assets/projects/world-gdp.png";
import { parseContent, projectSchema } from "@/lib/schema";

function projectGroup(slug: string) {
  if (slug.startsWith("codeveda-")) return 0;
  if (slug.startsWith("cloudly-")) return 1;
  return 2;
}

export const projects = parseContent(
  z.array(projectSchema),
  [
    {
      slug: "cloudly-campaign-performance-dashboard",
      title: "Email Campaign Performance Dashboard",
      highlight: "Dashboard",
      tool: "Looker Studio · Google Sheets",
      summary:
        "An auto-refreshing Looker Studio dashboard built during my Cloudly Infotech internship, replacing static document reports for B2B email outreach across three products.",
      image: cloudlyCampaignDashboardImage,
      imageAlt:
        "Anonymized Looker Studio dashboard showing campaign overview, product comparison and sequence-level email metrics",
      stats: ["3 products compared", "3 analysis levels", "15-min auto-refresh"],
      links: {
        live: "https://datastudio.google.com/reporting/cdf343d8-1f66-4eb7-9957-b3c2d36ddef3",
      },
      caseStudy: {
        context:
          "An anonymized case study from my Marketing Intern role at Cloudly Infotech. Campaign results had been shared as documents, which made comparison across products slow.",
        problem:
          "Give marketing, growth and business teams one place to see how three product email campaigns were performing, without rebuilding a report each time.",
        data: "Outreach-platform email metrics (emails sent, open rate, reply rate, bounce rate) for three B2B product campaigns, organized by product, outreach stream and sequence in Google Sheets. Aggregate metrics only.",
        approach: [
          "Restructured the campaign data in Google Sheets so Looker Studio could read it reliably.",
          "Designed three analysis levels: overall campaign overview, product-to-product comparison, and sequence-level detail.",
          "Built comparison charts and interactive filters and sliders so people in different roles could explore the data themselves.",
          "Applied the company's website color palette for a consistent look, and set the report to refresh automatically from the sheet (minimum 15 minutes).",
          "Walked the marketing and business teams through the controls in a live meeting.",
        ],
        insights: [
          "Side-by-side comparison made differences visible that separate documents hid: engagement was around 50% among CEOs and VPs in one campaign, over 50% among executives and around 40% among network engineers in another, and low in the third.",
          "Despite that engagement, none of the three campaigns had produced a reply, which pointed to a problem after the open rather than at it.",
        ],
        implication:
          "A shared, self-refreshing view moved the team from reporting numbers to asking why, and it fed directly into the outreach redesign proposal.",
        limitations:
          "Anonymized and aggregate only. Engagement is as reported by the outreach platform, where opens and clicks can include automated activity, so it is not proof of human interest.",
      },
    },
    {
      slug: "cloudly-prospect-segmentation",
      title: "B2B Prospect Qualification & Segmentation",
      highlight: "Segmentation",
      tool: "Apollo · HubSpot · Google Sheets · LinkedIn",
      summary:
        "Cleaning, qualifying and persona-segmenting B2B prospect lists for outreach campaigns, with manual LinkedIn verification to fix generic job titles.",
      image: cloudlyProspectSegmentationImage,
      imageAlt:
        "Anonymized illustration of a prospect list being categorized into persona segments",
      stats: ["400+ entry list", "250+ qualified", "125 of 133 re-verified"],
      links: {},
      caseStudy: {
        context:
          "An anonymized case study from my Cloudly Infotech internship, where outreach quality depended on reaching the right role at the right company.",
        problem:
          'Large prospect lists contained unrelated leads, unverified emails and generic titles such as "VP" or "Director" that hid who actually made technology decisions.',
        data: "A 400+ entry prospect list for a network-technology product, plus smaller lists for two other products, held in a CRM and an outreach platform. No individual prospect data is shown.",
        approach: [
          "Enriched lists, removed leads with unverified or unavailable emails, and scheduled valid prospects into pre-built outreach sequences.",
          "Split each list into persona-based tracks, for example executive decision makers versus technical champions.",
          "Categorized the large list into unrelated leads, technical leaders and generic VPs/Directors, then removed the unrelated group.",
          "Reviewed generic-title profiles one by one on LinkedIn, updating titles to reflect actual responsibilities and removing people with no decision-making relevance.",
          "Agreed a final submission with the growth team, separating confirmed prospects from uncertain ones, and later re-verified the uncertain group.",
          "Used Google Sheets FILTER to split approved lists by persona before importing them into sequences.",
        ],
        insights: [
          "Manual title review changed the segmentation: some prospects first tagged as operations decision makers fitted the technical-champion persona better once their real responsibilities were checked. I flagged these to my team lead for reclassification.",
          "Of 133 prospects previously marked as uncertain, 125 passed verification, so the uncertain group was mostly recoverable rather than waste.",
        ],
        implication:
          "Lead quality comes from understanding a person's actual role, not from list size, and persona-specific tracks make it possible to send different messages to different buyers.",
        limitations:
          "Anonymized. Segment sizes reflect the lists at the time and are not a conversion measurement. Segmentation criteria were agreed with the team rather than derived statistically.",
      },
    },
    {
      slug: "cloudly-outreach-process-redesign",
      title: "Outreach Gap Analysis & Sequence Redesign",
      highlight: "Redesign",
      tool: "Gap analysis · Email sequence design · Apollo",
      summary:
        "A root-cause analysis of why three email campaigns generated engagement but no replies, and a proposed redesign built around one purpose and one call to action per email.",
      image: cloudlyOutreachRedesignImage,
      imageAlt:
        "Anonymized diagram of a redesigned multi-step outreach sequence with one call to action per step",
      stats: [
        "3 campaigns reviewed",
        "0 replies diagnosed",
        "Redesign approved by team lead",
      ],
      links: {},
      caseStudy: {
        context:
          "An anonymized case study from my Cloudly Infotech internship. After preparing outreach reports for shareholders, I was asked by my team lead to turn my feedback into a concrete proposal.",
        problem:
          "Three campaigns showed engagement but produced no replies, and I needed to work out where the outreach was failing before rewriting any copy.",
        data: "Email-platform analytics for the three campaigns, the existing first-step emails, and the product brief used as the source of truth. Data volume was limited, so conclusions are treated as hypotheses.",
        approach: [
          "Compared the current outreach approach with the intended outcome (gap analysis) and wrote root-cause hypotheses rather than conclusions.",
          "Reviewed the first email: it explained too much at once and asked for a 15-minute meeting with no link, evidence or easier next step.",
          "Sorted product claims into already available, partially available and roadmap, so emails only promised what could be backed up.",
          "Designed a gradual journey where each email has one purpose and one CTA: recognize the problem, visit the product page, then try a self-service demo.",
          "Differentiated messaging by role: something technical to inspect for engineers, business risk and easy sharing for executives.",
          "Planned measurement before launch: tagged links, click tracking and a way to tie trial sign-ups to a company, while noting clicks alone are not proof of human interest.",
        ],
        insights: [
          "The templates were plain, text-only and had no clear CTA, which is a plausible reason engagement did not turn into replies.",
          "The goal of a campaign should not be limited to a reply. A click to an evidence-based product page is a valid and more measurable next step.",
        ],
        implication:
          "My team lead approved the proposed approach, with final sign-off from the head of marketing needed before implementation.",
        limitations:
          "Hypotheses, not tested results: the redesigned sequence had not been launched, so there is no performance data for it yet. Anonymized.",
      },
    },
    {
      slug: "cloudly-website-content-brief",
      title: "Website Content Brief & SEO Strategy",
      highlight: "Content",
      tool: "Content strategy · SEO/GEO · A/B content testing",
      summary:
        "A content brief, page-by-page SEO plan and A/B content experiment for a new standalone product website, built from validated source material and flagged open questions.",
      image: cloudlyWebsiteContentImage,
      imageAlt:
        "Anonymized outline of a product website structure with per-page SEO fields",
      stats: [
        "4 source sites reviewed",
        "2 content variants (A/B)",
        "5 open questions flagged",
      ],
      links: {},
      caseStudy: {
        context:
          "An anonymized case study from my Marketing Intern role at Cloudly Infotech. A network-technology product was being developed as an independent website, and I was asked to coordinate and create the content structure for its pages.",
        problem:
          "Write website content that is accurate, search-friendly and aimed at the right buyers, when the product was still being built and the source material was several weeks old.",
        data: "Four validated HTML websites used as background sources, plus the product's marketing formulation. No customer data or confidential specifications are shown.",
        approach: [
          "Wrote a content brief before any copy: what the product is, the problem it solves, audience, buyers and users, industries, core capabilities, differentiators, alternatives, evidence, deployment, integrations, pricing, CTA, brand direction, SEO priorities and product status.",
          "Listed what had to be confirmed before publishing: on-premise availability, customer references or quotable performance numbers, the final landing-page URL and trial-button label, official logo and brand guidelines, and whether the source pages had been re-verified since they were written.",
          "Used LLM tools with the source material to set up a repeatable content workflow, then defined SEO fields for each page and for the site as a whole: search intent, primary and secondary keywords, main message, conversion objective, SEO title, meta description, URL slug and page structure.",
          "Planned a full site structure: homepage, about, solutions and features, use cases, how it works, benefits, integrations, technical information, resources, FAQ, and a contact/demo page focused on conversion.",
          "Generated two content directions for the pages: Version A led with the outcomes the product delivers, and Version B led with the mechanisms behind them.",
          "Later revised the content deck to match the development team's feedback on actual build progress.",
        ],
        insights: [
          "Separating what had to be confirmed from what could be written stopped unverified claims, such as performance numbers and deployment options, from slipping into copy.",
          "Outcome-led and mechanism-led messaging suit different readers, so testing them per page is more useful than choosing one tone for the whole site.",
        ],
        implication:
          "The brief gave the team a single reference for what the site should say, which questions were still open, and how each page should be found and converted, and the deck stayed aligned with the product as development moved.",
        limitations:
          "The A/B comparison was a content-generation experiment, not a live traffic test, so there are no conversion results. The product was still in development, and the brief depends on claims awaiting engineering confirmation. Anonymized.",
      },
    },
    {
      slug: "cloudly-content-plan-workbook",
      title: "Content Plan Workbook & Claims Check",
      highlight: "Claims",
      tool: "Google Sheets · Dashboards · Content operations",
      summary:
        "A messy cross-product social media plan rebuilt into a five-tab tracking workbook with a live dashboard, post copy checks and a pre-publication claims review.",
      image: cloudlyContentPlanImage,
      imageAlt:
        "Anonymized content-plan dashboard with KPI tiles, a week-by-week grid and status and channel breakdowns",
      stats: [
        "28 deliverables tracked",
        "~140 formulas, 0 errors",
        "22 claims queued for review",
      ],
      links: {},
      caseStudy: {
        context:
          "An anonymized case study from my Marketing Intern role at Cloudly Infotech. My team lead gave me a combined product marketing and social media plan spread across products and asked for something the team could actually track.",
        problem:
          "A single untidy sheet made it hard to see what was due, who owned it, what its status was, and whether any statistics in the posts had been checked.",
        data: "An internal combined content plan covering multiple products and the product lifecycle. Only the dashboard structure is shown here, with no unreleased copy.",
        approach: [
          "Rebuilt the plan as a five-tab workbook: Dashboard, Content Plan, Social Post Copy, Claims Check, and Notes & Gaps.",
          "Content Plan became the master table: one row per deliverable (28), with IDs, content type, status and owner dropdowns, a target date column, week separators and color-coded types and statuses.",
          "Dashboard tiles, a week-by-week grid, status, channel and content-type breakdowns and a stacked chart all calculate from the other tabs, so nothing is typed twice.",
          "Social Post Copy held 16 posts with headline, body, CTA, hashtags, visual brief, asset link and a LinkedIn character-limit check.",
          "Claims Check listed 22 statistics and claims for review before publishing, with a column for sources. I hid it and Notes & Gaps before sharing, since they were working tabs rather than deliverables.",
          "After the engineering team presented new product specs, I recalibrated the plan, rebuilt the dashboard with more detailed charts and aligned the designs to the updated product.",
        ],
        insights: [
          "Formulas recalculated with no errors, and the dashboard totals reconciled to the 28 deliverables in the master table.",
          'A visible claims list turns "is this statistic safe to publish?" into a tracked task with a named source, instead of a last-minute worry.',
        ],
        implication:
          "The team got a single source of truth for content status, and the plan could be recalibrated quickly when the product specs changed.",
        limitations:
          "This is a planning and tracking tool, not a performance result. The claims were queued for review, and this page makes no statement about which were verified. Anonymized, with unpublished copy and hidden working tabs excluded.",
      },
    },
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
      links: {
        code: "https://github.com/ahadi133/my_projects/tree/main/cost-benefit-tableau",
      },
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
      links: {
        code: "https://github.com/ahadi133/my_projects/tree/main/financial-market-powerbi",
      },
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
      links: {
        code: "https://github.com/ahadi133/my_projects/tree/main/party-problem-analytica",
      },
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
    {
      slug: "world-gdp-dashboard",
      title: "World GDP Dashboard",
      highlight: "GDP",
      tool: "Google Data Studio",
      summary:
        "A global indicators dashboard for exploring GDP, population, trade, land, education, health, and labor measures across countries and years.",
      image: worldGdpImage,
      imageAlt:
        "Dashboard preview with country filters, economic KPI cards, a country comparison scatter plot, and charts of GDP composition and trends",
      stats: ["Country and year filters", "GDP, trade, and development indicators"],
      links: {
        live: "https://datastudio.google.com/s/nVC8O81DXS8",
      },
      caseStudy: {
        context:
          "A dashboard assignment focused on presenting country-level economic and development indicators in an interactive report.",
        problem:
          "How can users compare countries and explore changes in economic and social indicators over time?",
        data: "Country and year-level indicators including GDP, population, trade, land area, education expenditure, health expenditure, unemployment, and sector shares.",
        approach: [
          "Added continent, country, year, and land filters.",
          "Used KPI cards to summarize GDP per capita, land, population, net trade, and population density.",
          "Combined country comparisons with sector composition and time-series charts.",
        ],
        insights: [
          "The dashboard brings multiple country indicators into a single view for exploration.",
          "The scatter plot and time-series views support comparisons across countries and years.",
        ],
        implication:
          "Users can explore relationships and trends across indicators before investigating individual countries in more detail.",
        limitations:
          "The available portfolio file is a static PDF export, so its filters cannot be used. The underlying dataset and editable dashboard are not included.",
      },
    },
    {
      slug: "excel-sales-dashboard",
      title: "Sales and Profitability Dashboard",
      highlight: "Profitability",
      tool: "Microsoft Excel",
      summary:
        "An Excel dashboard for reviewing product sales, revenue, costs, and profit across markets and months.",
      image: excelSalesImage,
      imageAlt:
        "Excel sales dashboard with monthly performance and product and market summaries",
      stats: ["700 transaction rows", "Monthly and product summaries"],
      links: {
        code: "https://github.com/ahadi133/my_projects/tree/main/excel-sales-dashboard",
      },
      caseStudy: {
        context:
          "An Excel dashboard project built around transaction-level sales data and supporting summaries.",
        problem:
          "How can sales and profit performance be explored across products, markets, and time periods?",
        data: "Transaction records with country, product, units sold, revenue, cost, profit, and date fields.",
        approach: [
          "Organized transaction data for summary and dashboard views.",
          "Prepared monthly summaries for units sold and profit.",
          "Compared profit across markets and product types.",
        ],
        insights: [
          "The workbook supports comparisons of monthly units sold and profit.",
          "Market and product summaries help identify differences in sales performance.",
        ],
        implication:
          "The summaries provide a starting point for examining which products, markets, and periods contribute to sales and profit.",
        limitations:
          "The workbook is provided without a written findings report. Review the dashboard in Excel and verify its summaries before citing specific results.",
      },
    },
    {
      slug: "excel-business-decision-models",
      title: "Excel Business Decision Models",
      highlight: "Decision",
      tool: "Microsoft Excel",
      summary:
        "A set of spreadsheet models for break-even analysis, product-mix optimization, and scenario and sensitivity analysis.",
      image: excelModelsImage,
      imageAlt:
        "Spreadsheet model preview showing decision variables, assumptions, constraints, and scenario results",
      stats: ["Break-even modeling", "Product-mix optimization", "Scenario analysis"],
      links: {
        code: "https://github.com/ahadi133/my_projects/tree/main/excel-business-modeling",
      },
      caseStudy: {
        context:
          "A collection of Excel exercises applying quantitative models to business planning questions.",
        problem:
          "How can spreadsheet models help evaluate required sales, constrained product choices, and changing business assumptions?",
        data: "Model-specific assumptions for selling price, costs, demand, resource capacity, product mix, and alternative scenarios.",
        approach: [
          "Used Goal Seek models for break-even and profit questions.",
          "Set up a product-mix optimization model with resource constraints.",
          "Used scenario and sensitivity sheets to compare alternative assumptions.",
        ],
        insights: [
          "Goal Seek can identify input values associated with a target break-even or profit result.",
          "The product-mix model represents how limited resources constrain production choices.",
          "Scenario analysis makes the effect of changing assumptions easier to compare.",
        ],
        implication:
          "These models provide structured ways to examine business choices and test how outcomes depend on assumptions.",
        limitations:
          "The files are separate exercises with model-specific assumptions. Document and validate formulas and Solver settings before relying on any result.",
      },
    },
    {
      slug: "housing-and-sat-data-analysis",
      title: "Housing and SAT Data Analysis",
      highlight: "Analysis",
      tool: "Microsoft Excel",
      summary:
        "An Excel workbook exploring house-price and SAT-score datasets through descriptive statistics, correlation, regression, and written interpretation.",
      image: dataAnalysisImage,
      imageAlt:
        "Analysis workbook preview with housing data, SAT scores, regression output, and interpretation sections",
      stats: ["House-price analysis", "Math and verbal SAT scores"],
      links: {
        code: "https://github.com/ahadi133/my_projects/tree/main/data-analysis-exercises",
      },
      caseStudy: {
        context:
          "An applied data-analysis workbook containing assignment prompts, datasets, analyses, and interpretation sheets.",
        problem:
          "What patterns can descriptive statistics, correlation, and regression reveal in housing and SAT-score data?",
        data: "A house-price dataset with price, square feet, bedrooms, bathrooms, and city, plus a dataset of math and verbal SAT scores.",
        approach: [
          "Prepared descriptive statistics for the variables.",
          "Examined correlations among the housing variables.",
          "Modeled house price using square footage and multiple property features.",
          "Included analysis and interpretation worksheets.",
        ],
        insights: [
          "The workbook is structured to examine relationships between home price and property characteristics.",
          "The SAT data supports comparison of math and verbal scores.",
        ],
        implication:
          "The exercises demonstrate how summary statistics and regression can be used to explore datasets and communicate findings.",
        limitations:
          "Specific findings should be checked against the workbook’s formulas and outputs. Confirm dataset reuse permissions before publishing the source data.",
      },
    },
    {
      slug: "codeveda-data-cleaning",
      title: "Social Media & Iris Data Cleaning",
      highlight: "Data Cleaning",
      tool: "Python · pandas",
      summary:
        "Prepared social-media sentiment and Iris datasets for reliable downstream analysis by resolving duplicates, missing values, inconsistent labels, and data types.",
      image: codevedaDataCleaningImage,
      imageAlt:
        "Three-stage data preparation graphic showing raw social posts and Iris records being standardized into analysis-ready datasets",
      stats: ["710 social posts", "150 Iris observations", "3 sentiment groups"],
      links: {
        code: "https://github.com/ahadi133/codeveda_BA-projects/tree/main/data_preparation_and_exploration/data_cleaning",
      },
      caseStudy: {
        context:
          "A Codveda business analytics internship task to prepare raw records for reporting, statistical analysis, and modeling.",
        problem:
          "Inconsistent text, duplicate posts, missing categories, and untyped timestamps can make downstream metrics unreliable.",
        data: "Social-media posts with text, platform, country, timestamp, hashtag, and engagement fields, plus the 150-row Iris dataset.",
        approach: [
          "Removed redundant index columns and duplicate social-media posts.",
          "Standardized text, platform names, country labels, and timestamps.",
          "Converted engagement values to usable numeric types and filled missing categories consistently.",
          "Grouped detailed emotion labels into Positive, Negative, and Neutral.",
          "Standardized Iris column names and checked dataset completeness.",
        ],
        insights: [
          "The cleaned social dataset contains 710 posts, and the prepared Iris dataset contains 150 observations.",
          "Consistent sentiment groups and field types provide a dependable input for the downstream dashboard and analysis.",
        ],
        implication:
          "A documented cleaning layer reduces avoidable inconsistencies before dashboards or statistical conclusions are produced.",
        limitations:
          "Original source-dataset paths are environment-specific, and the source datasets are not all redistributed with the repository.",
      },
    },
    {
      slug: "codeveda-iris-exploratory-analysis",
      title: "Iris Exploratory Data Analysis",
      highlight: "Exploratory",
      tool: "Python · pandas · seaborn · SciPy",
      summary:
        "Profiled the Iris dataset with descriptive statistics and visual analysis to understand feature distributions and differences between species.",
      image: codevedaIrisImage,
      imageAlt: "Iris scatter plot comparing sepal and petal measurements by species",
      stats: ["150 observations", "50 records per species"],
      links: {
        code: "https://github.com/ahadi133/codeveda_BA-projects/tree/main/data_preparation_and_exploration/exploratory_data_analysis",
      },
      caseStudy: {
        context:
          "A Codveda internship analysis task focused on profiling a well-known flower-measurement dataset.",
        problem:
          "Which measurements distinguish Iris species, and how do the feature distributions and relationships vary?",
        data: "150 Iris observations with sepal and petal measurements across Setosa, Versicolor, and Virginica.",
        approach: [
          "Calculated descriptive statistics for each feature.",
          "Compared feature distributions and spread by species.",
          "Reviewed correlations, category counts, and multivariate scatter patterns.",
        ],
        insights: [
          "The dataset is balanced, with 50 observations for each species.",
          "Petal length and width are strongly related and clearly separate Setosa; Setosa has the smallest petal dimensions and Virginica the largest.",
        ],
        implication:
          "The visual comparisons show which measurements are most useful for distinguishing the species in this dataset.",
        limitations:
          "This is an exploratory analysis of a small, well-known dataset; observed separation should not be generalized to other populations.",
      },
    },
    {
      slug: "codeveda-social-media-sentiment-dashboard",
      title: "Social Media Sentiment Dashboard",
      highlight: "Sentiment",
      tool: "Power BI",
      summary:
        "Built an interactive reporting asset to monitor sentiment mix, engagement, platform activity, geography, hashtags, and posting patterns.",
      image: codevedaSentimentImage,
      imageAlt:
        "Power BI social media sentiment dashboard with post volume, positive sentiment, engagement, platform, country, hashtag, and time visuals",
      stats: [
        "710 posts",
        "58.9% positive sentiment",
        "64.5 average engagement per post",
      ],
      links: {
        code: "https://github.com/ahadi133/codeveda_BA-projects/tree/main/business_intelligence_and_decision_support/bi_reporting",
      },
      caseStudy: {
        context:
          "A Codveda internship reporting project using the cleaned social-media dataset to create a self-service Power BI report.",
        problem:
          "How can a stakeholder quickly monitor audience sentiment and engagement across platforms, countries, and time?",
        data: "710 cleaned social-media posts, including sentiment group, platform, country, timestamp, hashtags, likes, and retweets.",
        approach: [
          "Created KPI cards for post volume, positive sentiment share, and average engagement.",
          "Visualized sentiment mix, posting trends, platform distribution, and country patterns.",
          "Added hashtag and engagement comparisons to support content exploration.",
          "Packaged the report as an editable Power BI workbook.",
        ],
        insights: [
          "58.9% of posts are positive, 25.2% negative, and 15.9% neutral.",
          "The posts recorded 30,517 likes and 15,300 retweets, with average engagement of 64.5 per post.",
          "The USA has the largest positive-post volume, while platform sentiment distributions are broadly similar.",
        ],
        implication:
          "A single interactive report helps users inspect sentiment and engagement patterns before deciding which audiences or content to investigate.",
        limitations:
          "The Power BI workbook is intended for local presentation and depends on the cleaned CSV in the repository; the dashboard preview is static.",
      },
    },
    {
      slug: "codeveda-customer-churn-sql-analysis",
      title: "Customer Churn SQL Analysis",
      highlight: "Churn",
      tool: "SQLite",
      summary:
        "Queried 3,333 customer records to segment churn patterns, examine potential drivers, and demonstrate query-plan optimization.",
      image: codevedaChurnSqlImage,
      imageAlt:
        "Churn analysis graphic comparing churn rates for customers with four or more service calls, international-plan holders, and the overall customer base",
      stats: [
        "3,333 customers",
        "14.49% overall churn",
        "51.7% churn with 4+ service calls",
      ],
      links: {
        code: "https://github.com/ahadi133/codeveda_BA-projects/tree/main/business_intelligence_and_decision_support/sql_analysis",
      },
      caseStudy: {
        context:
          "A Codveda internship SQL project analyzing customer churn and demonstrating practical query techniques.",
        problem:
          "Which customer segments show elevated churn, and how can the analysis be made more efficient?",
        data: "A SQLite database containing 3,333 non-overlapping training and test customer records, with source-file designation retained.",
        approach: [
          "Used aggregations, CASE expressions, CTEs, joins, and window functions to examine churn.",
          "Compared churn by service-call count, international-plan status, usage, and state.",
          "Added an index on State and Churn and reviewed the query plan.",
        ],
        insights: [
          "Overall churn is 14.49% (483 customers).",
          "Customers with four or more service calls have a 51.7% churn rate; international-plan holders have a 42.4% rate versus 11.5% for others.",
          "Churned customers average 206.9 total day minutes versus 175.2 for non-churned customers.",
        ],
        implication:
          "The segment comparisons point to groups for follow-up investigation, while the indexed query demonstrates how database design can improve analysis workflows.",
        limitations:
          "These are observational associations, not proof of cause. The database is a local demonstration artifact and should be checked against source data before operational use.",
      },
    },
    {
      slug: "codeveda-customer-churn-statistical-analysis",
      title: "Customer Churn Statistical Analysis",
      highlight: "Statistical",
      tool: "Python · SciPy",
      summary:
        "Tested churn-related patterns, quantified uncertainty with confidence intervals and effect sizes, and separated association from causal claims.",
      image: codevedaChurnStatisticsImage,
      imageAlt:
        "Statistical analysis charts comparing service calls and customer churn rates",
      stats: ["14.49% estimated churn", "95% CI: 13.34%-15.73%", "Cohen's d: 0.50"],
      links: {
        code: "https://github.com/ahadi133/codeveda_BA-projects/tree/main/business_intelligence_and_decision_support/statistical_analysis",
      },
      caseStudy: {
        context:
          "A Codveda internship statistical analysis project validating patterns observed in customer churn data.",
        problem:
          "Which observed churn differences have statistical evidence, and how much uncertainty remains around the estimated churn rate?",
        data: "Customer churn outcomes, service-call counts, and international-plan status from the 3,333-record telecom dataset.",
        approach: [
          "Compared service-call counts for churned and non-churned customers with a Welch t-test.",
          "Tested the association between international-plan status and churn with a chi-square test.",
          "Reported a Wilson confidence interval for the churn rate and effect sizes for practical context.",
          "Proposed a randomized 90-day A/B test for evaluating future retention offers.",
        ],
        insights: [
          "Churned customers make 0.78 more service calls on average than non-churned customers (p < 0.001; Cohen's d = 0.50).",
          "International-plan status is associated with churn (p < 0.001; Cramér's V = 0.26).",
          "The estimated churn rate is 14.49%, with a 95% Wilson interval of 13.34%-15.73%.",
        ],
        implication:
          "Prioritize investigation of customers with repeated service calls and international plans, then validate retention interventions with a randomized experiment.",
        limitations:
          "No randomized campaign variable is available, so the results support association rather than causal A/B-test conclusions.",
      },
    },
    {
      slug: "codeveda-predictive-modeling",
      title: "Customer, Housing & Demand Predictive Modeling",
      highlight: "Predictive",
      tool: "Python · scikit-learn · statsmodels",
      summary:
        "Compared churn classifiers, house-price regressors, time-series forecasts, and customer clusters to explore predictive and segmentation approaches.",
      image: codevedaPredictiveImage,
      imageAlt:
        "Model evaluation visual with ROC curves for churn classifiers and a random-forest confusion matrix",
      stats: [
        "4 analysis tracks",
        "Churn decision-tree ROC AUC: 0.906",
        "House-price random-forest R²: 0.879",
      ],
      links: {
        code: "https://github.com/ahadi133/codeveda_BA-projects/tree/main/predictive_risk_and_strategy_analytics/predictive_modeling",
      },
      caseStudy: {
        context:
          "A Codveda internship modeling portfolio extending exploratory analysis into prediction, forecasting, and customer segmentation.",
        problem:
          "How can historical data support churn identification, property-value estimation, sequential forecasting, and customer grouping?",
        data: "Telecom churn records, house characteristics and prices, sequential time-series observations, and customer usage features for clustering.",
        approach: [
          "Compared multiple classifiers and retained held-out churn probabilities.",
          "Compared regression models for house-price estimation.",
          "Evaluated forecasting baselines and trend-based approaches using error metrics.",
          "Created customer clusters and profiles to support segmentation.",
        ],
        insights: [
          "The depth-5 decision tree achieved a 0.906 ROC AUC and 0.822 F1 score on the reported churn test set.",
          "The random-forest house-price model achieved an R² of 0.879 in the reported comparison.",
          "The mean of the last six months had a lower forecast MAE (5.94) than the naive last-value baseline (20.33) in the reported comparison.",
        ],
        implication:
          "Comparing models and baselines makes trade-offs visible and provides probability and segment outputs that can feed later risk and strategy work.",
        limitations:
          "Metrics reflect the supplied train/test splits and are not guarantees of future performance. Saved model binaries are excluded; recreate them with the repository workflows.",
      },
    },
    {
      slug: "codeveda-churn-risk-analysis",
      title: "Customer Churn Risk Segmentation",
      highlight: "Risk",
      tool: "Python · predictive analytics",
      summary:
        "Translated churn probabilities into low-, medium-, and high-risk cohorts to help prioritize customer-retention outreach.",
      image: codevedaChurnRiskImage,
      imageAlt:
        "Risk analysis charts summarizing customers segmented into churn probability bands",
      stats: ["3 risk bands", "Probability-based prioritization"],
      links: {
        code: "https://github.com/ahadi133/codeveda_BA-projects/tree/main/predictive_risk_and_strategy_analytics/risk_analysis",
      },
      caseStudy: {
        context:
          "A Codveda internship risk-analysis task that turns churn-model probabilities into practical outreach cohorts.",
        problem:
          "How can a retention team prioritize customers when it cannot contact every customer with the same level of effort?",
        data: "Held-out customer churn probabilities, observed outcomes, and customer attributes such as service-call counts and plan status.",
        approach: [
          "Applied explicit probability thresholds to assign low-, medium-, and high-risk bands.",
          "Summarized cohort scores and outcomes in a risk-analysis output.",
          "Visualized the resulting risk segmentation.",
        ],
        insights: [
          "Risk bands provide a readable bridge between model probabilities and operational prioritization.",
          "The repository recommends proactive outreach for high-risk customers and lower-cost tests for medium-risk cohorts.",
        ],
        implication:
          "Teams can use the bands to organize retention experiments and allocate limited outreach capacity by estimated risk.",
        limitations:
          "Thresholds are model-dependent and should be calibrated and monitored against observed churn as new outcomes accumulate.",
      },
    },
    {
      slug: "codeveda-prescriptive-retention-strategy",
      title: "Prescriptive Retention Strategy Analysis",
      highlight: "Retention",
      tool: "Python · PuLP · scenario analysis",
      summary:
        "Compared retention scenarios and recommended how constrained outreach capacity could be allocated under explicit cost, value, and success assumptions.",
      image: codevedaRetentionImage,
      imageAlt:
        "Scenario comparison chart of expected net benefit for a lower success-rate scenario, the base case, and a higher success-rate scenario",
      stats: [
        "8 scenarios compared",
        "57 offers in the base allocation",
        "Assumption-driven estimates",
      ],
      links: {
        code: "https://github.com/ahadi133/codeveda_BA-projects/tree/main/predictive_risk_and_strategy_analytics/prescriptive_analytics",
      },
      caseStudy: {
        context:
          "A Codveda internship prescriptive analytics project connecting churn risk to an outreach allocation and scenario framework.",
        problem:
          "How should limited retention capacity be allocated when intervention cost, success rate, and customer value are uncertain?",
        data: "Risk scores, estimated intervention costs and customer values, capacity constraints, and explicit scenario assumptions.",
        approach: [
          "Recorded assumptions for offer costs, capacity, success rates, and customer value.",
          "Compared eight scenarios and their expected net benefits.",
          "Produced a recommended customer allocation and simulation-level outputs.",
        ],
        insights: [
          "The base scenario allocates 57 offers with an estimated net benefit of 1,166 model units.",
          "The scenario comparison is sensitive to success-rate and customer-value assumptions; the 40% success-rate scenario estimates 2,054 model units of net benefit.",
        ],
        implication:
          "Scenario analysis makes the conditions behind a recommended allocation explicit so decision-makers can test assumptions before committing resources.",
        limitations:
          "These are assumption-based model estimates, not measured campaign outcomes. Update costs, capacity, conversion rates, and customer values before operational use.",
      },
    },
  ],
  "projects",
).sort((left, right) => projectGroup(left.slug) - projectGroup(right.slug));

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
