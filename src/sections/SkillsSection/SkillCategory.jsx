import SkillCard from "./SkillCard";

const SkillCategory = ({ category }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-3xl font-bold text-slate-900">{category.category}</h3>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
