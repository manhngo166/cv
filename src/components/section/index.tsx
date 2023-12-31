import { Section as SectionWrap, SectionHeader, SectionContent } from "./style";

interface Props {
    title: string;
    children: any;
}

const Section = (props: Props) => {
    const { title, children } = props;

    return (
        <SectionWrap>
            <SectionHeader>{title}</SectionHeader>
            <SectionContent>{children}</SectionContent>
        </SectionWrap>
    )
};

export default Section;