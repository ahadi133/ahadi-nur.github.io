import { z } from "zod";
import { analysisWorkSchema, parseContent } from "@/lib/schema";

export const analysisWork = parseContent(
  z.array(analysisWorkSchema),
  [
    {
      icon: "chart",
      domain: "Profitability",
      title: "Profitability & Cost Analysis",
      analysed:
        "sales, COGS, expense and budget data to find where profit really comes from.",
      tags: ["KPI Design", "Budget vs Actual", "Tableau"],
    },
    {
      icon: "trend",
      domain: "Finance",
      title: "Financial Performance Monitoring",
      analysed:
        "profitability, liquidity and valuation ratios against targets across eight companies.",
      tags: ["KPI vs Goal", "Variance Analysis", "Power BI"],
    },
    {
      icon: "scale",
      domain: "Decision Support",
      title: "Decision Support Under Uncertainty",
      analysed:
        "how the best choice shifts as confidence in an uncertain factor changes.",
      tags: ["Sensitivity Analysis", "Expected Value", "Analytica"],
    },
    {
      icon: "megaphone",
      domain: "Marketing",
      title: "Marketing & Market Intelligence",
      analysed:
        "competitors, prospects and campaign performance to support B2B lead generation.",
      tags: ["Market Research", "Lead Generation", "Performance Analysis"],
    },
    {
      icon: "database",
      domain: "AI Data",
      title: "AI Data Preparation",
      analysed: "dataset quality and consistency requirements for AI training workflows.",
      tags: ["Data Annotation", "Data Quality", "Requirements"],
    },
    {
      icon: "database",
      domain: "Data Preparation",
      title: "Social Media & Iris Data Cleaning",
      analysed:
        "710 social posts and 150 Iris observations for duplicates, missing values, inconsistent labels, and usable field types.",
      tags: ["Data Quality", "pandas", "Feature Preparation"],
    },
    {
      icon: "chart",
      domain: "Exploratory Analysis",
      title: "Iris Species Exploration",
      analysed:
        "feature distributions, correlations, and species-level differences in a balanced 150-observation dataset.",
      tags: ["Descriptive Statistics", "Data Visualization", "Python"],
    },
    {
      icon: "trend",
      domain: "Social Media",
      title: "Sentiment & Engagement Reporting",
      analysed:
        "sentiment mix and engagement across 710 posts, platforms, countries, hashtags, and time.",
      tags: ["Power BI", "Sentiment Analysis", "Engagement"],
    },
    {
      icon: "database",
      domain: "Customer Churn",
      title: "Churn Segmentation with SQL",
      analysed:
        "3,333 customer records to compare churn by service-call count, plan status, usage, and state.",
      tags: ["SQLite", "CTEs", "Query Optimization"],
    },
    {
      icon: "scale",
      domain: "Statistical Inference",
      title: "Customer Churn Evidence & Uncertainty",
      analysed:
        "service-call and international-plan relationships with churn using hypothesis tests, confidence intervals, and effect sizes.",
      tags: ["Welch t-test", "Chi-square", "Confidence Intervals"],
    },
    {
      icon: "trend",
      domain: "Predictive Analytics",
      title: "Churn, Housing & Demand Models",
      analysed:
        "classification, house-price regression, time-series forecasts, and customer clusters against comparison baselines.",
      tags: ["scikit-learn", "Model Evaluation", "Forecasting"],
    },
    {
      icon: "chart",
      domain: "Risk Prioritization",
      title: "Churn Probability Risk Bands",
      analysed:
        "held-out churn probabilities into low-, medium-, and high-risk cohorts for differentiated outreach.",
      tags: ["Risk Segmentation", "Probability Thresholds", "Retention"],
    },
    {
      icon: "scale",
      domain: "Retention Strategy",
      title: "Capacity-Constrained Retention Scenarios",
      analysed:
        "eight outreach scenarios under changing cost, success-rate, customer-value, and capacity assumptions.",
      tags: ["Scenario Analysis", "Optimization", "Decision Support"],
    },
  ],
  "analysis work",
);
