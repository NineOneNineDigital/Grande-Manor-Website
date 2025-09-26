#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { GraphQLClient } from "graphql-request";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read .env file
const envPath = path.join(__dirname, ".env");
const envContent = fs.readFileSync(envPath, "utf8");
const lines = envContent.split("\n");

let apiUrl = "";
let apiToken = "";

lines.forEach((line) => {
  if (line.startsWith("VITE_HYGRAPH_API_URL=")) {
    apiUrl = line.split("=")[1];
  }
  if (line.startsWith("VITE_HYGRAPH_API_TOKEN=")) {
    apiToken = line.split("=")[1];
  }
});

// Create GraphQL client
const client = new GraphQLClient(apiUrl);
if (apiToken) {
  client.setHeader("authorization", `Bearer ${apiToken}`);
}

// Schema introspection query
const introspectionQuery = `
  query IntrospectSchema {
    __schema {
      queryType {
        fields {
          name
          type {
            name
            kind
            ofType {
              name
              kind
            }
          }
        }
      }
    }
  }
`;

async function introspectSchema() {
  try {
    console.log("🔍 Introspecting Hygraph schema...\n");
    const result = await client.request(introspectionQuery);
    
    console.log("📋 Available queries:");
    result.__schema.queryType.fields.forEach(field => {
      console.log(`- ${field.name} (${field.type.name || field.type.kind})`);
    });
    
    console.log("\n🎯 Looking for project-related queries...");
    const projectFields = result.__schema.queryType.fields.filter(field => 
      field.name.toLowerCase().includes('project') || 
      field.name.toLowerCase().includes('completed')
    );
    
    if (projectFields.length > 0) {
      console.log("Found project-related queries:");
      projectFields.forEach(field => {
        console.log(`- ${field.name}`);
      });
    } else {
      console.log("No project-related queries found. Available queries:");
      result.__schema.queryType.fields.forEach(field => {
        console.log(`- ${field.name}`);
      });
    }
    
  } catch (error) {
    console.error("❌ Schema introspection failed:", error.message);
  }
}

introspectSchema();
