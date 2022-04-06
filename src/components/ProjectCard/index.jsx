import React from "react";
import Tag from "../Tag";

export default function ProjectCard({ title, address, children, tags }) {
  return (
    <div className="border p-4 rounded-md flex flex-col gap-1">
      <h4 className="text-sm font-bold">{title}</h4>
      {address && (
        <p className="text-xs flex gap-2">
          <span className="font-bold">Address:</span>
          <span className="text-gray-500">{address}</span>
        </p>
      )}
      <div className="text-sm text-gray-500">{children}</div>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
}
